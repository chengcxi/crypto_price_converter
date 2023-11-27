# crypto_price_converter

This project uses Data Feeds by ChainLink to display the current prices in different country's currency.

Simple explanition of what each file does for now:

## datafeeds.py

The getPrice function use the web3.py library and intereact with a smart contract on sepolia testnet to get the latest price for BTC.

The function also convert it into USD.

``` 
python datafeeds.py
```

<img width="734" alt="image" src="https://github.com/Blockchain-UCSB/crypto_price_converter/assets/75823989/a2dbc5f4-da25-44a8-82f8-e8d3cf1e485a">

## currency.py

The getRate function uses the FixerAPI and fetch the Foreign exchange rates and currency conversion.

After fecthing rates, the function will create a csv file 'rates.csv' thats stores all the currecny symbol and rate pairs.

Note that the based curency is EUR, not USD.

More information on fixer and getting an API key here: https://fixer.io/

<img width="749" alt="image" src="https://github.com/Blockchain-UCSB/crypto_price_converter/assets/75823989/515a1654-bbd3-4ecb-80f5-2da191446677">

## main.py

Essentially just calling the datafeeds to get the newest price, and use the convert funtion in currency.py to get the price in different currency.

```
python main.py
```

<img width="660" alt="image" src="https://github.com/Blockchain-UCSB/crypto_price_converter/assets/75823989/0904ed34-fe83-4a19-9fee-7d2fa7ddcb6e">

