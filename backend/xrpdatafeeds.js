var Web3 = require('Web3');
var datetime = require('datetime');


// gets the XRP price
function getPrice() {
    // XRP testnet - sepolia's RPC URL by Alchemy
    web3 = Web3(Web3.HTTPProvider('https://rpc.ankr.com/eth_sepolia'));
    // AggregatorV3Interface ABI
    abi = '[{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"description","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint80","name":"_roundId","type":"uint80"}],"name":"getRoundData","outputs":[{"internalType":"uint80","name":"roundId","type":"uint80"},{"internalType":"int256","name":"answer","type":"int256"},{"internalType":"uint256","name":"startedAt","type":"uint256"},{"internalType":"uint256","name":"updatedAt","type":"uint256"},{"internalType":"uint80","name":"answeredInRound","type":"uint80"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"latestRoundData","outputs":[{"internalType":"uint80","name":"roundId","type":"uint80"},{"internalType":"int256","name":"answer","type":"int256"},{"internalType":"uint256","name":"startedAt","type":"uint256"},{"internalType":"uint256","name":"updatedAt","type":"uint256"},{"internalType":"uint80","name":"answeredInRound","type":"uint80"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"version","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]';
    // Price Feed address
    addr = '0x785ba89291f676b5386652eb12b30cf361020694';
}
    // Set up contract instance
    contract = web3.eth.contract(address=addr, abi=abi);
    // Make call to latestRoundData()
    latestData = contract.functions.latestRoundData().call();

    // Extract timestamps from the result
    round_id = latestData[0];
    price = latestData[1] / 10**8;
    started_at_timestamp = latestData[2];
    updated_at_timestamp = latestData[3];

    // Convert timestamps to human-readable format
    started_at_datetime = datetime.utcfromtimestamp(started_at_timestamp).strftime('%Y-%m-%d %H:%M:%S UTC');
    updated_at_datetime = datetime.utcfromtimestamp(updated_at_timestamp).strftime('%Y-%m-%d %H:%M:%S UTC');

    return price


function main() {
    console.log('Fecthing data using web3.py... \n');
    price = getPrice();
    console.log('XRP price in USD: {price}\n');
}
