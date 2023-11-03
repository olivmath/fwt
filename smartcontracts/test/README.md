# Extracto Tests

```py
test
├── BaseSetup.t.sol # have all setups for tests
├── MockToken.t.sol  # mock of a generic token
├── Utils.t.sol # can create new users (Base inheritance of `forge-std/Tests.sol`)
├── commodity
│   ├── Commodity.Auth.t.sol # e2e authentication tests
│   ├── Commodity.Drawer.t.sol # e2e drawer test
│   ├── Commodity.Farm.t.sol # e2e farm test
│   ├── Commodity.Future.t.sol # e2e creation futures test
│   └── Commodity.DEX.t.sol # e2e sell, buy and cancel orders plus swap
├── cow
│   └── COW.Commodity.t.sol # e2e add or remove commodity from cow
└── future
    └── Future.Withdraw.t.sol # e2e withdraw test and COW creation
```
