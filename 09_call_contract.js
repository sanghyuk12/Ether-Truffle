const Web3 = require('web3');
const web3 = new Web3('https://ropsten.infura.io/v3/');

const calculatorAbi = require('./abi/calculator');
const calculatorContractAddress = '0xf572f85d2b08263c78c34578333b9d5218e92ae6';
const Calculator = new web3.eth.Contract(calculatorAbi, calculatorContractAddress);

async function callContract(address) {
    let a = 3;
    let b = 5;
    const result = await Calculator.methods.add(a, b).call();
    console.log('result : ' + result);
}

callContract('0xf572f85d2b08263c78c34578333b9d5218e92ae6');


