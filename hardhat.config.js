require("@nomiclabs/hardhat-waffle");



module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },

//lion--Esto es para en el caso de que querramos este en lared
//  mumbai: {
//    url: "https://rpc-mumbai.maticvigil.com",
//    accounts: [process.env.privateKey]
//  }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}