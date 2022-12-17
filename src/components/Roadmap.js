import React, { useState } from "react";
import "../app.sass";

const Roadmap = () => {
  return (
    <div className="max-w-full w-[1300px] h-full m-auto p-5 font-unbounded text-center">
      <div className="mb-[20px] sm:mb-[60px]">
        <h1 className="font-unbounded text-gray-800 dark:text-gray-200 text-2xl sm:text-3xl md:text-4xl font-semibold ">
          Roadmap
        </h1>
      </div>
      <ul className="timeline" id="timeline">
        <li className="li complete text-gray-800 dark:text-gray-200 ">
          <div className="timestamp">
            {/* <span className="author">Abhi </span> */}
            <span className="date">Phase 1 - Dec 2022</span>
          </div>
          <div className="status ">
            <p>Website Creation.</p>
            <p>Solidproof KYC Application.</p>
            <p>Presale Marketing.</p>
            <p>Whitelist Campaign.</p>
            <p>Pinksale Whitelist Presale.</p>
            <p>Pancakeswap Listing.</p>
            <p>Aggressive marketing after the Presale.</p>
            <p>CoinMarketCap Application.</p>
            <p>CoinGecko Application.</p>
            <p>2,000 Holders.</p>
          </div>
        </li>
        <li className="li text-gray-800 dark:text-gray-200">
          <div className="timestamp">
            {/* <span className="author">PAM Admin</span> */}
            <span className="date">Phase 2 - Mar 2023</span>
          </div>
          <div className="status">
            <p>Ave Trending.</p>
            <p>Dextools trending.</p>
            <p>Youtube & Tiktok Marketing.</p>
            <p>Blockchain Service Partnership Announcement.</p>
            <p>Award-Winning contest.</p>
            <p>5,000 Holders.</p>
          </div>
        </li>
        <li className="li text-gray-800 dark:text-gray-200">
          <div className="timestamp">
            {/* <span className="author">Aaron Rodgers</span> */}
            <span className="date">Phase 3 - Jul 2022</span>
          </div>
          <div className="status">
            <p> Release Santa Rabbit NFTs.</p>
            <p>Tier 1 CEX Listing.</p>
            <p>Bscscan Ads.</p>
            <p>Poocoin Ads.</p>
            <p>WatcherGuru & Coinsniper Ads.</p>
            <p>10,000 Holder.</p>
          </div>
        </li>
        <li className="li text-gray-800 dark:text-gray-200">
          <div className="timestamp">
            {/* <span className="author">PAM Admin</span> */}
            <span className="date">Phase 4 - Oct 2023</span>
          </div>
          <div className="status">
            <p>100,000 Holder.</p>
            <p>Award-Winning NFT Competition.</p>
            <p>Tier 1 CEX Listing.</p>
            <p>Meme partnership.</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Roadmap;
