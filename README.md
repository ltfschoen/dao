# Setup 

* Terminal Tab 1 - Install Truffle
```
npm install -g truffle
```

* Terminal Tab 2 - Install Test Framework with Ethereum TestRPC
```
npm install -g ganache-cli
```

* Terminal Tab 2 - Start Ethereum Blockchain Protocol Node Simulation
```
ganache-cli \
  --port="8500" \
  --mnemonic "copy obey episode awake damp vacant protect hold wish primary travel shy" \
  --verbose \
  --networkId=3 \
  --gasLimit=7984452 \
  --gasPrice=2000000000;
```

* Terminal Tab 1 - Compile and Deploy the FixedSupplyToken Contract
```
truffle migrate --network development
```

* Terminal Tab 1 - Run Sample Unit Tests on the Truffle Contract. Truffle Re-Deploys the Contracts
```
truffle test
```

# Debugging

* Debug the Solidity Smart Contract in Remix IDE and MIST

# Troubleshooting

* If you get error `Error: Congress contract constructor expected 3 arguments, received 0` then ensure sufficient arguments are passed to the construction function of the smart contract in **2_deploy_contracts.js**.
  * Reference: https://github.com/trufflesuite/truffle/issues/446