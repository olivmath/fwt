"""
Automation for update debug section in front-end
"""

from dataclasses import dataclass, field
from json import dumps, load
from typing import List
import json
import glob


@dataclass
class Contract:
    """
    # Contract must have:
    - contractAddress: str
    - contractName: str
    - abi: list
    """

    name: str
    address: str
    abi: list = field(default_factory=list)


CHAIN_ID = 31337
CONTRACT_SCRIPT_NAME = "deploy.local.s.sol"
TRANSACTIONS_PATH = f"broadcast/{CONTRACT_SCRIPT_NAME}/{CHAIN_ID}/run-latest.json"
TARGET_DIR = "../ui/contracts/deployedContracts.ts"

CONTRACTS = []


def abi_path(name) -> str:
    return f"artifacts/{name}.sol/{name}.json"


def updateABI():
    with open(TRANSACTIONS_PATH) as deployed_contracts:
        json_file = load(deployed_contracts)
        transactions = json_file["transactions"]
        contracts: List[Contract] = []

        for contract in transactions:
            if contract["transactionType"] == "CREATE":
                name, address = contract["contractName"], contract["contractAddress"]
                CONTRACTS.append(name)
                with open(abi_path(name)) as full_abi_json:
                    abi = load(full_abi_json)["abi"]
                    contracts.append(Contract(name, address, abi))

    typescript_content = f"""
    import {{ GenericContractsDeclaration }} from "~~/utils/fwt/contract";

    const deployedContracts = {{
        {CHAIN_ID}: {dumps({
            contract.name: {
                "address": contract.address,
                "abi": contract.abi,
            }
            for contract in contracts
        })}
    }} as const;

    export default deployedContracts satisfies GenericContractsDeclaration;
    """

    with open(TARGET_DIR, "w") as ts_file:
        ts_file.write(typescript_content)


def get_metadata():
    BUILD_INFO = glob.glob("artifacts/build-info/*.json")[0]
    with open(BUILD_INFO) as build_info:
        json_file = load(build_info)
        contracts_data = json_file["output"]["contracts"]

        # Filtrar os contratos relevantes
        filtered_contracts = {
            contract_path: {
                name: contracts_data[contract_path][name]
                for name in contracts_data[contract_path]
                if name in CONTRACTS
            }
            for contract_path in contracts_data
            if any(name in contracts_data[contract_path] for name in CONTRACTS)
        }

        # Atualiza a estrutura original com os contratos filtrados
        json_file["output"]["contracts"] = filtered_contracts

    # Salvar o conteúdo filtrado de volta ao arquivo original
    with open(BUILD_INFO, "w") as build_info:
        json.dump(json_file, build_info, indent=4)


updateABI()
get_metadata()
