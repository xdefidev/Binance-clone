import { MdOutlineArrowDropDown } from "react-icons/md";
import { IoMdApps } from "react-icons/io";
import { IoMoon, IoSunny } from "react-icons/io5";
import { FaTelegram, FaFacebook, FaDiscord, FaYoutube } from "react-icons/fa";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";

import img1 from "../assets/images/img1.png";
import img2 from "../assets/images/img2.png";
import img3 from "../assets/images/img3.png";
import img4 from "../assets/images/img4.png";
import img5 from "../assets/images/img5.png";
import support from "../assets/images/purse.png";
import blog from "../assets/images/commission.png";
import community from "../assets/images/messages.png";
import career from "../assets/images/encareer-light.png";

export const NavMainData = [
  {
    icon1: <IoMdApps size={28} />,
    icon2: <MdOutlineArrowDropDown size={24} />,
    item: "Products",
    subItem: [
      { item: "Exchange", desc: "BlockChain and crypto asset exchange" },
      {
        item: "Institutional & VIP Services",
        desc: "While approach for tailored trading solutions",
      },
      {
        item: "DEX",
        desc: "Fast and secure decentralized digital asset exchange",
      },

      { item: "Card Deposit", desc: "Deposit Eur via card" },
      { item: "Credit/Debit Card", desc: "Buy Crypto via Card" },
      { item: "P2P Trading", desc: "Bank transfer and 100+ options" },

      { item: "Exchange", desc: "BlockChain and crypto asset exchange" },
      {
        item: "Institutional & VIP Services",
        desc: "While approach for tailored trading solutions",
      },
      {
        item: "DEX",
        desc: "Fast and secure decentralized digital asset exchange",
      },
    ],
  },
  {
    item: "Buy Crypto",
    subItem: [
      { item: "Card Deposit", desc: "Deposit Eur via card" },
      { item: "Credit/Debit Card", desc: "Buy Crypto via Card" },
      { item: "P2P Trading", desc: "Bank transfer and 100+ options" },
    ],
  },
  {
    item: "Markets",
  },
  {
    item: "Trade",
    subItem: [
      { item: "Convert", desc: "The easiest way to trade" },
      { item: "Classic", desc: "Simple and easy-to-use interface" },
      { item: "Advanced", desc: "Full access to all trading tools" },
      { item: "Margin", desc: "Increase your profile with leverage" },
    ],
  },
  {
    item: "Derivatives",
    subItem: [
      { item: "Convert", desc: "The easiest way to trade" },
      { item: "Classic", desc: "Simple and easy-to-use interface" },
      { item: "Advanced", desc: "Full access to all trading tools" },
      { item: "Margin", desc: "Increase your profile with leverage" },
    ],
  },
  {
    item: "Earn",
    subItem: [
      { item: "Convert", desc: "The easiest way to trade" },
      { item: "Classic", desc: "Simple and easy-to-use interface" },
      { item: "Advanced", desc: "Full access to all trading tools" },
      { item: "Margin", desc: "Increase your profile with leverage" },
    ],
  },
  {
    item: "Finance",
    subItem: [
      { item: "Convert", desc: "The easiest way to trade" },
      { item: "Classic", desc: "Simple and easy-to-use interface" },
      { item: "Advanced", desc: "Full access to all trading tools" },
      { item: "Margin", desc: "Increase your profile with leverage" },
    ],
  },
  {
    item: "NFT",
  },
];

export const NavSideData = [
  {
    item: "Log in",
  },
  {
    item: "Register",
  },
  {
    item: "English",
  },

  {
    item: "Theme",
    icon1: <IoMoon size={18} />,
    icon2: <IoSunny size={18} />,
  },
];

export const ImgSliderData = [
  {
    img: img1,
  },
  {
    img: img2,
  },
  {
    img: img3,
  },
  {
    img: img4,
  },
  {
    img: img5,
  },
];

export const TouchData = [
  {
    icon: support,
    title: "No Deposits",
    desc: "Simply register an account and start trading.",
  },
  {
    icon: blog,
    title: "No commission",
    desc: "Crypto exchanges charge upto 4% in commission, we charge 0%.",
  },
  {
    icon: community,
    title: "No surprises",
    desc: "All BNBDADDY quotes are executed at the displayed price. What you see is what you get.",
  },
];

export const TouchData1 = [
  {
    icon: support,
    title: "Blockchain",
    desc: "A scalable blockchain that is designed to process millions of transactions within seconds.",
  },
  {
    icon: blog,
    title: "Payments",
    desc: "BNBDADDY payments platform for micropayments and a micropayment channel network.",
  },
];

export const FooterData = [
  {
    item: "About Us",
    subItem: [
      "About",
      "Careers",
      "Business Contacts",
      "Community",
      "BNBDADDY Blog",
      "Terms",
      "Privacy",
      "Announcements",
      "News",
      "Notice",
    ],
  },
  {
    item: "Products",
    subItem: [
      "Exchange",
      "Academy",
      "Charity",
      "Card",
      "Labs",
      "Launchpad",
      "Research",
      "Trust Wallet",
      "NFT",
      "Featured market",
      "BNBDADDY Pay",
      "Gift Card",
    ],
  },
  {
    item: "Service",
    subItem: [
      "Downloads",
      "Desktop Application",
      "Buy Crypto",
      "Institutional & VIP Services",
      "Referral",
      "Execution Solutions",
      "Affiliate",
      "BNB",
      "OTC Trading",
      "Listing Application",
      "P2P Merchant Application",
      "Historical Market Data",
    ],
  },
  {
    item: "Support",
    subItem: [
      "Give Us Feedback",
      "Support Center",
      "Submit a request",
      "API Documentation",
      "Fees",
      "Trading Rules",
      "BNBDADDY Verify",
      "Law Enforcement Requests",
    ],
  },
  {
    item: "Learn",
    subItem: [
      "Buy BNB",
      "Buy BUSD",
      "Buy Bitcoin",
      "Buy Ethereum",
      "Buy Litecoin",
      "Buy Ripple",
      "Buy Bitcoin Cash",
      "Buy Dogecoin",
      "Buy DeFi",
      "Buy SHIB",
      "Buy Tradable Altcoins",
    ],
  },
  {
    item: "Join the Community",
    subItem: [
      <FaTelegram size={45} color="#e4e7eb" />,
      <FaFacebook size={45} color="#e4e7eb" />,
      <AiOutlineTwitter size={45} color="#e4e7eb" />,
      <FaDiscord size={45} color="#e4e7eb" />,
      <AiOutlineInstagram size={45} color="#e4e7eb" />,
      <FaYoutube size={45} color="#e4e7eb" />,
    ],
  },
];
