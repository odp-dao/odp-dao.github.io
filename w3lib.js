(function(window,undefined){window.kakaru={};var k=window.kakaru;k.connectionStatus=false;k.web3=undefined;var _loadSdk=function(){k.web3=new Web3(Web3.givenProvider||"ws://localhost:8545");if (k['onload'])k['onload']();console.log("kakaru sdk loaded");};k.connect=async function(){const accounts=await k.web3.eth.requestAccounts();if(accounts&&accounts.length&&accounts.length>0){k.connectionStatus=true;k.connectedAddress=accounts[0];k.web3.eth.defaultAccount=accounts[0];};return(accounts&&accounts.length>0)}
k.contract=function(_contractAddress,_contractAbi=undefined){var _r={};if(!_contractAbi&&kakaru_contracts[_contractAddress]){_contractAbi=JSON.parse(kakaru_abis[kakaru_contracts[_contractAddress]]);}
_r._contract=(new this.web3.eth.Contract(_contractAbi,_contractAddress));_contractAbi.forEach((it,idx,arr)=>{if(it.type=="function"&&it.stateMutability=="view"){_r[it.name]=function(...args){return _r._contract.methods[it.name](...args).call();}}
if(it.type=="function"&&it.stateMutability=="nonpayable"){_r[it.name+""]=function(...args){return _r._contract.methods[it.name](...args).send({from:k.connectedAddress,gasPrice:(k.gasPrice?k.gasPrice:undefined)});}}
if(it.type=="function"&&it.stateMutability=="payable"){_r[it.name+""]=function(...args){var vargs=JSON.parse(JSON.stringify(args));console.log(vargs);var _v=vargs.splice(-1);if(Array.isArray(_v))_v=_v[0];console.log(_v);return _r._contract.methods[it.name](...vargs).send({from:k.connectedAddress,value:_v,gasPrice:(k.gasPrice?k.gasPrice:undefined)});}}});return _r;};window.setTimeout(()=>{if(window.Web3==undefined){var el=document.createElement("script"),loaded=false;el.onload=el.onreadystatechange=function(){if((el.readyState&&el.readyState!=="complete"&&el.readyState!=="loaded")||loaded){return false;}
el.onload=el.onreadystatechange=null;loaded=true;_loadSdk();};el.async=true;el.src="https://cdnjs.cloudflare.com/ajax/libs/web3/1.6.1/web3.min.js";var hhead=document.getElementsByTagName('head')[0];hhead.insertBefore(el,hhead.firstChild);}else{console.log("Web3 already loaded!");_loadSdk();}},1000);})(window);

window.kakaru_abis =
{
    "TokenSaleWhitelistCliffVesting": '[    {"inputs": [{"internalType": "address","name": "_tokenAddress","type": "address"},{"internalType": "address","name": "_sellerAddress","type": "address"},{"internalType": "uint256","name": "_currentPrice","type": "uint256"},{"internalType": "contract IERC20","name": "_payment_token","type": "address"},{"internalType": "uint256","name": "_currentErc20Price","type": "uint256"},{"internalType": "address[]","name": "_whitelist","type": "address[]"},{"internalType": "uint256","name": "_startTs","type": "uint256"},{"internalType": "uint256","name": "_endTs","type": "uint256"},{"internalType": "bool","name": "_useWhitelist","type": "bool"},{"internalType": "uint256[]","name": "_tokenAllocation","type": "uint256[]"}],"stateMutability": "nonpayable","type": "constructor"    },    {"anonymous": false,"inputs": [{"indexed": true,"internalType": "address","name": "wallet","type": "address"},{"indexed": true,"internalType": "uint256","name": "monthIndex","type": "uint256"},{"indexed": true,"internalType": "uint256","name": "value","type": "uint256"}],"name": "Claimed","type": "event"    },    {"anonymous": false,"inputs": [{"indexed": true,"internalType": "uint256","name": "timestamp","type": "uint256"}],"name": "EndSales","type": "event"    },    {"anonymous": false,"inputs": [{"indexed": false,"internalType": "address","name": "account","type": "address"}],"name": "Paused","type": "event"    },    {"anonymous": false,"inputs": [{"indexed": true,"internalType": "address","name": "payer","type": "address"},{"indexed": false,"internalType": "uint256","name": "amount","type": "uint256"}],"name": "Received","type": "event"    },    {"anonymous": false,"inputs": [{"indexed": true,"internalType": "address","name": "payer","type": "address"},{"indexed": false,"internalType": "uint256","name": "amount","type": "uint256"}],"name": "ReceivedErc20","type": "event"    },    {"anonymous": false,"inputs": [{"indexed": true,"internalType": "bytes32","name": "role","type": "bytes32"},{"indexed": true,"internalType": "bytes32","name": "previousAdminRole","type": "bytes32"},{"indexed": true,"internalType": "bytes32","name": "newAdminRole","type": "bytes32"}],"name": "RoleAdminChanged","type": "event"    },    {"anonymous": false,"inputs": [{"indexed": true,"internalType": "bytes32","name": "role","type": "bytes32"},{"indexed": true,"internalType": "address","name": "account","type": "address"},{"indexed": true,"internalType": "address","name": "sender","type": "address"}],"name": "RoleGranted","type": "event"    },    {"anonymous": false,"inputs": [{"indexed": true,"internalType": "bytes32","name": "role","type": "bytes32"},{"indexed": true,"internalType": "address","name": "account","type": "address"},{"indexed": true,"internalType": "address","name": "sender","type": "address"}],"name": "RoleRevoked","type": "event"    },    {"anonymous": false,"inputs": [{"indexed": true,"internalType": "address","name": "payee","type": "address"},{"indexed": false,"internalType": "uint256","name": "amount","type": "uint256"},{"indexed": false,"internalType": "uint256","name": "balance","type": "uint256"}],"name": "Sent","type": "event"    },    {"anonymous": false,"inputs": [{"indexed": true,"internalType": "uint256","name": "timestamp","type": "uint256"}],"name": "StartSales","type": "event"    },    {"anonymous": false,"inputs": [{"indexed": false,"internalType": "address","name": "account","type": "address"}],"name": "Unpaused","type": "event"    },    {"inputs": [],"name": "DEFAULT_ADMIN_ROLE","outputs": [{"internalType": "bytes32","name": "","type": "bytes32"}],"stateMutability": "view","type": "function"    },    {"inputs": [],"name": "PAUSER_ROLE","outputs": [{"internalType": "bytes32","name": "","type": "bytes32"}],"stateMutability": "view","type": "function"    },    {"inputs": [],"name": "THIRTY_DAYS_IN_SECONDS","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"    },    {"inputs": [{"internalType": "address[]","name": "_buyers","type": "address[]"}],"name": "addToWhitelist","outputs": [],"stateMutability": "nonpayable","type": "function"    },    {"inputs": [{"internalType": "address","name": "","type": "address"}],"name": "addressToUserInfo","outputs": [{"internalType": "uint256","name": "totalTokens","type": "uint256"},{"internalType": "uint256","name": "remainingTokens","type": "uint256"},{"internalType": "int256","name": "lastClaimMonthIndex","type": "int256"}],"stateMutability": "view","type": "function"    },    {"inputs": [],"name": "claim","outputs": [],"stateMutability": "nonpayable","type": "function"    },    {"inputs": [],"name": "cliffMonths","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"    },    {"inputs": [],"name": "currentErc20Price","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"    },    {"inputs": [],"name": "currentPrice","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"    },    {"inputs": [],"name": "endTimestamp","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"    },    {"inputs": [{"internalType": "bytes32","name": "role","type": "bytes32"}],"name": "getRoleAdmin","outputs": [{"internalType": "bytes32","name": "","type": "bytes32"}],"stateMutability": "view","type": "function"    },    {"inputs": [{"internalType": "bytes32","name": "role","type": "bytes32"},{"internalType": "address","name": "account","type": "address"}],"name": "grantRole","outputs": [],"stateMutability": "nonpayable","type": "function"    },    {"inputs": [{"internalType": "bytes32","name": "role","type": "bytes32"},{"internalType": "address","name": "account","type": "address"}],"name": "hasRole","outputs": [{"internalType": "bool","name": "","type": "bool"}],"stateMutability": "view","type": "function"    },    {"inputs": [],"name": "igoTimestamp","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"    },    {"inputs": [{"internalType": "address","name": "","type": "address"}],"name": "isWhitelisted","outputs": [{"internalType": "bool","name": "","type": "bool"}],"stateMutability": "view","type": "function"    },    {"inputs": [],"name": "maxTokenAmount","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"    },    {"inputs": [],"name": "minTokenAmount","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"    },    {"inputs": [],"name": "myToken","outputs": [{"internalType": "contract IERC20","name": "","type": "address"}],"stateMutability": "view","type": "function"    },    {"inputs": [],"name": "pause","outputs": [],"stateMutability": "nonpayable","type": "function"    },    {"inputs": [],"name": "paused","outputs": [{"internalType": "bool","name": "","type": "bool"}],"stateMutability": "view","type": "function"    },    {"inputs": [],"name": "paymentToken","outputs": [{"internalType": "contract IERC20","name": "","type": "address"}],"stateMutability": "view","type": "function"    },    {"inputs": [{"internalType": "uint256","name": "_quantity","type": "uint256"}],"name": "purchaseToken","outputs": [],"stateMutability": "payable","type": "function"    },    {"inputs": [{"internalType": "uint256","name": "_quantity","type": "uint256"}],"name": "purchaseTokenWithErc20","outputs": [],"stateMutability": "payable","type": "function"    },    {"inputs": [{"internalType": "address[]","name": "_buyers","type": "address[]"}],"name": "removeFromWhitelist","outputs": [],"stateMutability": "nonpayable","type": "function"    },    {"inputs": [{"internalType": "bytes32","name": "role","type": "bytes32"},{"internalType": "address","name": "account","type": "address"}],"name": "renounceRole","outputs": [],"stateMutability": "nonpayable","type": "function"    },    {"inputs": [{"internalType": "bytes32","name": "role","type": "bytes32"},{"internalType": "address","name": "account","type": "address"}],"name": "revokeRole","outputs": [],"stateMutability": "nonpayable","type": "function"    },    {"inputs": [],"name": "sellerAddress","outputs": [{"internalType": "address","name": "","type": "address"}],"stateMutability": "view","type": "function"    },    {"inputs": [{"internalType": "address","name": "_payee","type": "address"},{"internalType": "uint256","name": "_amount","type": "uint256"}],"name": "sendTo","outputs": [],"stateMutability": "nonpayable","type": "function"    },    {"inputs": [{"internalType": "uint256","name": "_currentErc20Price","type": "uint256"}],"name": "setCurrentErc20Price","outputs": [],"stateMutability": "nonpayable","type": "function"    },    {"inputs": [{"internalType": "uint256","name": "_currentPrice","type": "uint256"}],"name": "setCurrentPrice","outputs": [],"stateMutability": "nonpayable","type": "function"    },    {"inputs": [{"internalType": "uint256","name": "_endTimestamp","type": "uint256"}],"name": "setEndTimestamp","outputs": [],"stateMutability": "nonpayable","type": "function"    },    {"inputs": [{"internalType": "uint256","name": "_startTimestamp","type": "uint256"}],"name": "setStartTimestamp","outputs": [],"stateMutability": "nonpayable","type": "function"    },    {"inputs": [{"internalType": "bool","name": "_useWhitelist","type": "bool"}],"name": "setUseWhitelist","outputs": [],"stateMutability": "nonpayable","type": "function"    },    {"inputs": [],"name": "startTimestamp","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"    },    {"inputs": [{"internalType": "bytes4","name": "interfaceId","type": "bytes4"}],"name": "supportsInterface","outputs": [{"internalType": "bool","name": "","type": "bool"}],"stateMutability": "view","type": "function"    },    {"inputs": [],"name": "tokenAddress","outputs": [{"internalType": "contract IERC20","name": "","type": "address"}],"stateMutability": "view","type": "function"    },    {"inputs": [],"name": "tokenOwner","outputs": [{"internalType": "address","name": "","type": "address"}],"stateMutability": "view","type": "function"    },    {"inputs": [],"name": "tokenSold","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"    },    {"inputs": [],"name": "unlockAtIGOPercent","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"    },    {"inputs": [],"name": "unpause","outputs": [],"stateMutability": "nonpayable","type": "function"    },    {"inputs": [],"name": "useWhitelist","outputs": [{"internalType": "bool","name": "","type": "bool"}],"stateMutability": "view","type": "function"    },    {"inputs": [],"name": "vestingPeriodMonths","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"    }]',
    "Erc20":'[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]'
};

window.kakaru_contracts={
    "_self_contract_":"TokenSaleWhitelistCliffVesting",
    "0x08814c9cD0695D45289F50C07Be2454C056f7Ce4":"TokenSaleWhitelistCliffVesting",
    "0x2CD61969944514b17b0C927baa136AB65E217337":"Erc20",
    "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174":"Erc20"
}