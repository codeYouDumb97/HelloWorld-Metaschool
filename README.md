# Metaschool - Create your first Hello World Contract in Solidity

#### Install packages to deploy and interact with the contract.

``` 
npm install 
```

#### To deplo the contract, run the following command

```
npx hardhat run scripts/deploy.js --network rinkeby
```
Make sure you have all your API urls and private keys stored inside a `.env` file

#### To interact with the contact

```
npx hardhat run scripts/interact.js
```

This will change the original message from the contract to a new message you defined in the code.
