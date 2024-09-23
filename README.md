# Fullstack Web3 Template v2.3.2

https://github.com/user-attachments/assets/d49b05ed-da7c-47df-9665-dedf0c2f25a9

## QuickStart

**You need run 3 app, using 3 terminals**:

1. Frontend
2. Blockchain local (anvil)
3. Deploy your smartcontracts into blockchain

### Frontend

1. **Install frontend**

```bash
cd ui
npm install # or yarn or pnpm install
```

2. **Run application**

```bash
npm run dev # or yarn dev or pnpm dev
```

### Blockchain

```bash
anvil -b 1 # Mining blocks every 1 second
```

### Deploy your Smartcontracts

```bash
cd smartcontracts
./deploy-on-local.sh
```

## FWT Structure

```
├── smartcontracts/
│   ├── ...
│   ├── lib
│   ├── deploy-on-local.sh
│   ├── script
│   │   └── deploy.local.s.sol
│   ├── src
│   │   └── Counter.sol
│   └── test
│       ├── BaseSetup.t.sol
│       ├── Counter.t.sol
│       └── Utils.t.sol
└── ui/
    ├── ...
    ├── contracts
    │   └── deployedContracts.ts
    └── package.json
```

**Explain**:

- The **contracts** folder contains everything you need to build smartcontracts.
- The **ui** folder contains everything you need to interact with your smartcontract using frontend.

### `contracts` structure

- **`deploy-on-local.sh`**: just call it to deploy, it makes deployment simple without copying and pasting things.
- **`src/*`**: the folder where we will write our contracts.
- **`test/*`**: the folder where we will write our tests.
- **`lib/*`**: the folder where the foundry stores the libraries.
- **`script/deploy.local.s.sol`**: the solidity script responsible for actually doing the deployment.
- **`test/BaseSetup.t.sol`**: is the contract where we are going to configure the tests.

### `ui` structure

- **`contracts/deployedContracts.ts`**: ABI of the contract that will be ‘auto-magically’ copied by the `smartcontracts/deploy.py` script.
- **`package.json`**: list of dependencies and commands to run the frontend.
