const Web3 = require('web3');

const web3 = new Web3('https://ropsten.infura.io/v3/');


async function getNonce(address) {

    const result = await web3.eth.getTransactionCount(address);

    console.log(result)

}


getNonce('0xA07634A1ce0Fa33D3f9147108fcdAf02E591e21E');

