const { task } = require("hardhat/config");

task("generate-seed", "generating new seed phrase")
  .setAction(async () => {
    const randomWallet = ethers.Wallet.createRandom();
    const mnemonic = randomWallet.mnemonic.phrase;

    console.log("Your seed", mnemonic);
  });
