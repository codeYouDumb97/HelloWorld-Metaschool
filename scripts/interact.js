// nothing is copy-pasted here! I typed every single line of code
const {ethers, network} = require('hardhat');

const API_KEY = process.env.API_KEY;
const CONTRACT_ADDRESS = "enter your deployed contact adddress here";
const PRIVATE_KEY = process.env.PRIVATE_KEY;

const contract = require('../artifacts/contracts/HelloWorld.sol/HelloWorld.json');

const alchemyProvider = new ethers.providers.AlchemyProvider("rinkeby", API_KEY);
const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);

const helloWorldContract = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);

async function main() {

    const message = await helloWorldContract.returnMessage();
    console.log("The message is: ", message);

    const tx = await helloWorldContract.update("Hello! I'm AlgoBoi_01")
    await tx.wait();

    const newMessage = await helloWorldContract.returnMessage();
    console.log("The new message is: ", newMessage);

}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.log(error);
        process.exit(1);
    });