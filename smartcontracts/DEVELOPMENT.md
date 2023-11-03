## How to start

You need before [foundry](https://book.getfoundry.sh)

```
curl -L https://foundry.paradigm.xyz | bash
```

### Buid yours contracts

```shell
forge b
```

### Run the tests

```
forge t
```

## Deploy Locally

Run your Anvil

```
anvil
```

Deploy your contracts

```
./local_deploy.sh
```

- The script `deploy.s.sol` will deploy: [USDT, USDC, Commodity, Diamond, DEX, COW, Future]

1. Deploy ecosystem: USDT, USDC, Commodity, Diamond, DEX, COW
2. Buy a Future contract by `0x...2266` address (test address 1)
3. Put a `sell order` by `0x...2266`
4. Transfer `usdc` from `0x...2266` to `0x...79C8` (test address 2)
5. Put a `buy order` with `0x...79C8`
6. Check match order

| Contract  | Describe                                                  |
| --------- | --------------------------------------------------------- |
| USDT      | Faucet Token with 18 decimals for tests                   |
| USDC      | Faucet Token with 6 decimals for tests                    |
| Commodity | Responsable by create and store (drawer) future contracts |
| Diamond   | Plataform contract for deploy and upgrade new contracts   |
| DEX       | Exchange of Future contracts on-chain                     |
| COW       | Based Coin of Extracto DeFi                               |
| Future    | Contract bought by an investee                            |

## Development

**To develop a new feature, you need to:**

1. Create a new folder with the new version of the deployment
2. Implement only the correction or addition of the function
3. create a new deploy script with the new version number
