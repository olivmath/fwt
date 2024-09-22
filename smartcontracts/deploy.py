"""
Automation for update debug section in front-end
"""

from dataclasses import dataclass, field
from json import dumps, load
from typing import List


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


def abi_path(name) -> str:
    return f"artifacts/{name}.sol/{name}.json"


with open(TRANSACTIONS_PATH) as deployed_contracts:
    json_file = load(deployed_contracts)
    transactions = json_file["transactions"]
    contracts: List[Contract] = []

    for contract in transactions:
        if contract["transactionType"] == "CREATE":
            name, address = contract["contractName"], contract["contractAddress"]
            with open(abi_path(name)) as full_abi_json:
                abi = load(full_abi_json)["abi"]
                contracts.append(Contract(name, address, abi))


typescript_content = f"""
import {{ GenericContractsDeclaration }} from "~~/utils/scaffold-eth/contract";

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
