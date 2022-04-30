const hre = require("hardhat");

async function main() {

  const ContractFactory = await hre.ethers.getContractFactory("HelloWorld");
  const contract = await ContractFactory.deploy("This is the first message");

  await contract.deployed();

  console.log("Contract deployed to:", contract.address);

  let txn = await contract.update("This is the updated message!");
  await txn.wait();
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
