source .env

forge script scripts/deploy.dao.testnet.sol:Mumbai \
    --private-key $MUMBAI_PRIVATE_KEY \
    --rpc-url $MUMBAI_RPC_URL \
    --broadcast
