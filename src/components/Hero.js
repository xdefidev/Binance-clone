import React from "react";
import { LiveCryptoData } from "../data/data";
import hero from "../assets/images/hero.png";
const Hero = () => {
  const [coins, setCoins] = React.useState([]);

  React.useEffect(() => {
    async function fetchPrice() {
      const coinPrices = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
        .then((response) => response.json())
        .then((data) => setCoins(data.slice(0, 4)));
    }
    fetchPrice();
  }, []);

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",

    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

  return (
    <div className="bg-[#fafafa] dark:bg-[#0b0e11] transition-colors duration-100">
      <div
        className="p-2 max-w-full w-[1300px] m-auto lg:h-[480px] flex flex-col justify-center bg-no-repeat  bg-cover"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="flex flex-col justify-center m-4 lg:h-[200px] py-6 max-h-max ">
          <div className="space-y-4 dark:text-white">
            <h1 className="font-unbounded text-2xl lg:text-5xl font-semibold text-gray-800 dark:text-white">
              Buy & sell Crypto in minutes
            </h1>
            <p className="font-unbounded text-sm lg:text-[16px] text-gray-700 dark:text-[#848e9c]">
              Join the world's largest crypto exchange
            </p>
            <button className="bg-[#d00000] text-sm font-semibold py-3 lg:py-3 px-16 text-[16px] rounded-md text-gray-800">
              Register Now
            </button>
          </div>
        </div>
        {/* Crypto live */}
        <div className="h-auto flex flex-wrap">
          {coins?.map((data, index) => (
            <div
              key={index}
              className="m-5 flex-auto text-[12px] lg:text-[16px]"
            >
              <div className="space-x-1">
                <span className="dark:text-gray-300 text-gray-600 ">
                  {data?.name}/Busd
                </span>
                <span
                  className={
                    data?.market_cap_change_percentage_24h
                      .toString()
                      .split("")[0] == "-"
                      ? "text-color-red"
                      : "text-green-500"
                  }
                >
                  {data?.market_cap_change_percentage_24h}
                </span>
              </div>
              <p className="font-unbounded lg:text-2xl text-xl font-semibold dark:text-gray-200 text-gray-800">
                {formatter.format(data?.current_price)}
              </p>
              <p className="font-unbounded dark:text-gray-400 text-gray-600">
                MC {formatter.format(data?.market_cap)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
