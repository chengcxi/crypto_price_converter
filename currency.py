# convert between different currency
import os
from dotenv import load_dotenv
import requests
import csv

# load_dotenv()

# FIXER_API = os.getenv("FIXER_API")

# get rate by calling fixer API


def getRate(FIXER_API):
    # setting up the url to call the API
    base_url = "http://data.fixer.io/api/latest"
    params = {"access_key": FIXER_API}

    response = requests.get(base_url, params=params)

    if response.status_code == 200:
        data = response.json()
        rates = data["rates"]
    else:
        print(f"Error: {response.status_code}")
        print(response.text)

    with open("rates.csv", mode="w", newline="") as csv_file:
        csv_writer = csv.writer(csv_file)
        # first, set up the field name or the header
        csv_writer.writerow(["Symbols", "Exchange Rate"])
        for rate in rates:
            # Write the row to the CSV file
            row = [rate, rates[rate]]
            csv_writer.writerow(row)

    return rates


# should be able to call this function and get the conversion rate and the value in the target currency
# eg. convert("USD", "TWD", "BTC", 20)
def convert(src, target, coin, value):
    rate = 30
    data = value * 30

    print(f"converted {value} {coin} in {src} into {target}")
    return data


def main():
    load_dotenv()

    FIXER_API = os.getenv("FIXER_API")
    rates = getRate(FIXER_API)


if __name__ == "__main__":
    main()
