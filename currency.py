# convert between different currency


# should be able to call this function and get the conversion rate and the value in the target currency
# eg. convert("USD", "TWD", "BTC", 20)
def convert(src, target, coin, value):
    rate = 30
    data = value * 30

    print(f"converted {value} {coin} in {src} into {target}")
    return data
