## Metaschool - Create your first Hello World Contract in Solidity

If you are having any problem with the code from the course, do check out this repo for the updated code and contract.

#### Install packages to deploy and interact with the contract.

``` 
npm install 
```

#### To deploy the contract, run the following command

```
npx hardhat run scripts/deploy.js --network rinkeby
```
Make sure you have all your API urls and private keys stored inside a `.env` file

#### To interact with the contact

```
npx hardhat run scripts/interact.js
```

This will change the original message from the contract to a new message you defined in the code.
