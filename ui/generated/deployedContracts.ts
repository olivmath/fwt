const deployedContracts = {
  "31337": [
    {
      name: "localhost",
      chainId: "31337",
      contracts: {
        Counter: {
          address: "0xe7f1725e7734ce288f8367e1bb143e90bb3f0512",
          abi: [
            { type: "function", name: "increment", inputs: [], outputs: [], stateMutability: "nonpayable" },
            {
              type: "function",
              name: "number",
              inputs: [],
              outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
              stateMutability: "view",
            },
            {
              type: "function",
              name: "setNumber",
              inputs: [{ name: "newNumber", type: "uint256", internalType: "uint256" }],
              outputs: [],
              stateMutability: "nonpayable",
            },
          ],
        },
      },
    },
  ],
} as const;

export default deployedContracts;
