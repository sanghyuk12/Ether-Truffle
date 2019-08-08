const HDWalletProvider = require('truffle-hdwallet-provider-privkey');
const privateKeys = ['0cb8d7b42b223a5aa349ab6fac94dbab2cdb25a4181ba11db8e13581039e05ec']; // private keys

module.exports = {
  //Network : 배포 할 네트워크에 대한 Config
  networks: {
    development: {
      provider: () => {
        return new HDWalletProvider(privateKeys, 'https://ropsten.infura.io/v3/0dfb4d2a3e754a8ea7f26c9a89628842');
      },
      gasPrice: 20000000000,
      network_id: 3
    },
    ropsten: {
      provider: () => {
        return new HDWalletProvider(privateKeys, 'https://ropsten.infura.io/v3/0dfb4d2a3e754a8ea7f26c9a89628842');
      },
      gasPrice: 20000000000,
      network_id: 3
    },
  },
  compilers: {
    solc: {
      version: '0.4.25',
      docker: false,
    }
  }
};


