
import { GenericContractsDeclaration } from "~~/utils/fwt/contract";

const deployedContracts = {
    31337: {"Counter": {"address": "0x610178da211fef7d417bc0e6fed39f05609ad788", "abi": [{"type": "function", "name": "getError", "inputs": [], "outputs": [], "stateMutability": "pure"}, {"type": "function", "name": "increment", "inputs": [], "outputs": [], "stateMutability": "nonpayable"}, {"type": "function", "name": "number", "inputs": [], "outputs": [{"name": "", "type": "uint256", "internalType": "uint256"}], "stateMutability": "view"}, {"type": "function", "name": "setNumber", "inputs": [{"name": "newNumber", "type": "uint256", "internalType": "uint256"}], "outputs": [], "stateMutability": "nonpayable"}, {"type": "function", "name": "withdraw", "inputs": [{"name": "amount", "type": "uint256", "internalType": "uint256"}], "outputs": [], "stateMutability": "pure"}, {"type": "error", "name": "CustomError", "inputs": [{"name": "message", "type": "string", "internalType": "string"}]}, {"type": "error", "name": "InsufficientBalance", "inputs": [{"name": "available", "type": "uint256", "internalType": "uint256"}, {"name": "required", "type": "uint256", "internalType": "uint256"}]}]}}
} as const;

export default deployedContracts satisfies GenericContractsDeclaration;
