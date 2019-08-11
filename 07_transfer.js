const Web3 = require('web3');
const web3 = new Web3('https://ropsten.infura.io/v3/0dfb4d2a3e754a8ea7f26c9a89628842');

const address = '0x32b72db056BA43093D59816eD495B255b7c32982';
const privateKey = '0x0cb8d7b42b223a5aa349ab6fac94dbab2cdb25a4181ba11db8e13581039e05ec';

    async function transfer(to, value, nonce) {
        let etherToWei = web3.utils.toWei(value.toString());
        let tx = {
            to,
            nonce: web3.utils.toHex(nonce),
            value: etherToWei,
            gas: '2000000',
            gasPrice: '30000000000'
        };
    
        try {
            const result = await web3.eth.accounts.signTransaction(tx, privateKey);
            //const sendResult = await web3.eth.sendSignedTransaction(result.rawTransaction);
            //console.log(sendResult);
            web3.eth.sendSignedTransaction(result.rawTransaction)
              .on('transactionHash', (hash) => {
                  console.log(hash);
              });
        } catch (e) {
            console.error(e);
        }
    }
    
    transfer('0x32b72db056BA43093D59816eD495B255b7c32982', '0.1', 18);
    transfer('0x32b72db056BA43093D59816eD495B255b7c32982', '0.2', 19);
    transfer('0x32b72db056BA43093D59816eD495B255b7c32982', '0.3', 20);
    transfer('0x32b72db056BA43093D59816eD495B255b7c32982', '0.4', 21);
    transfer('0x32b72db056BA43093D59816eD495B255b7c32982', '0.5', 22);
    