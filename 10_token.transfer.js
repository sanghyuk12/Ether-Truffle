const Web3 = require('web3');
const web3 = new Web3('https://ropsten.infura.io/v3/0dfb4d2a3e754a8ea7f26c9a89628842');


const tokenAbi = require('./abi/erc20');
const tokenContractAddress = '0x56f5b26a9807495a846acb8f6472be50a54386e0';
const TokenContract = new web3.eth.Contract(tokenAbi, tokenContractAddress);

const address = '0x32b72db056BA43093D59816eD495B255b7c32982';
const privateKey = '0x0cb8d7b42b223a5aa349ab6fac94dbab2cdb25a4181ba11db8e13581039e05ec';


async function getTokenBalance(address) {
    let balance = await TokenContract.methods.balanceOf(address).call();
    console.log(balance);
}

async function getTokenName() {
    const name = await TokenContract.methods.name().call();
    console.log(name);
}

async function getTokenSymbol() {
    const symbol = await TokenContract.methods.symbol().call();
    console.log(symbol);
}

async function transfer(to, value, contractAddress) {//contractAddress to에 contractAddress를 추가

    let data = '';
    let tx = {};

    if (contractAddress) {//contractaddress주소가 있다면
        let etherToWei = web3.utils.toWei(value.toString());
        data = getDecodedParameter(to, etherToWei);
        tx = {
            to: contractAddress,
            value: 0,
            data,
            gas: '200000',
            gasPrice: '30000000000',
        };
    } else {//contractAddress주소가 없다면
        tx = {
            to,
            value,
            gas: '200000',
            gasPrice: '30000000000',
        };
    }



    try {
        const result = await web3.eth.accounts.signTransaction(tx, privateKey);
        const sendResult = await web3.eth.sendSignedTransaction(result.rawTransaction);
        console.log(sendResult);
    } catch (e) {
        console.error(e);
    }
}

function getDecodedParameter(address, amount) {
    const input = TokenContract.methods.transfer(address, amount).encodeABI();
    console.log(input);
    return input;
}

// getTokenName();
// getTokenSymbol();
// getTokenBalance('0x0E8535e3e01fC692AC805171C01440c15FA66B26');
 //getDecodedParameter('0x56f5b26a9807495a846acb8f6472be50a54386e0', '111');//수량
transfer('0x8C931e887B5b5da75e600A877206244207AEb8Cd', '2', tokenContractAddress);