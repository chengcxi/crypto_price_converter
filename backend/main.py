# main python file that runs everything
import datafeeds
import currency


def main():
    price = datafeeds.getPrice()
    print(f"BTC price in USD: {price}")

    new_price = currency.convert("USD", "NTD", "BTC", price)
    print(f"BTC price in NTD: {new_price}")


if __name__ == "__main__":
    main()
