const hre = require("hardhat");

async function main() {
  // We get the contract to deploy
  const UBToken = await hre.ethers.getContractFactory("UBToken");
  const ubtoken = await UBToken.deploy(10 * (10*18));

  await ubtoken.deployed();

  console.log("UBToken deployed to:", ubtoken.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
