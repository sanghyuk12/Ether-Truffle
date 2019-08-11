const Web3 = require('web3');

const web3 = new Web3('https://ropsten.infura.io/v3/0dfb4d2a3e754a8ea7f26c9a89628842');


async function getNonce(address) {

    const result = await web3.eth.getTransactionCount(address);

    console.log(result)

}


getNonce('0x32b72db056BA43093D59816eD495B255b7c32982');

