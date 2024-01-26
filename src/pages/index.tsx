import React, { useState } from "react";

export default function Home() {
  const [nft, setNft] = useState({
    price: "19K",
    tokenId: "",
    seller: "",
    owner: "",
    rarity: "2849",
    image: "",
    description:
      "Maybe in a parallel universe where I got the computer I wanted for my 11th birthday, this would have been the original version of Bad Kids.",
    tokenURI: "",
    name: "Bit Kids #3956",
    symbol: "Bit Kid",
    expiry: "79d 5hr | April 4, 2024 at 4.07 am",
  });

  return (
    <div className="relative overflow-hidden">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 font-body p-4 sm:p-8 mt-0">
        <div className="p-3 sm:p-0 mb-6 md:mr-12">
          <img
            src={"/img/3956.jpg"}
            alt={"bitkids"}
            className="w-full md:w-[758px] h-[758px] rounded-xl "
          />
        </div>
        <div className="mb-6 md:mb-0">
          <div className="flex items-center justify-between w-full">
            <div className="text-primary">{nft.symbol}</div>
            <img
              src={"/img/alert.svg"}
              alt={"alert"}
              className="w-8 h-8 rounded-xl hover:bg-primary"
            />
          </div>
          <h1 className="text-2xl mt-2">
            {nft.tokenId} {nft.name}
          </h1>
          <p className="mt-2 text-md">{nft.description}</p>
          <div className="text-sm mt-2">
            Created By <span className="text-primary">{nft.symbol}</span>
          </div>
          <div className="text-sm mt-2">
            <img
              src={"/img/chart.svg"}
              alt={"chart"}
              className="w-5 h-5 mr-1 inline-block"
            />
            2849
          </div>

          <div className="text-lg mt-2 flex items-center gap-1">
            <p>Price</p>
            <h2>{nft.price} STARS</h2>
            <div className="text-[#A1A1AA]">($870.59)</div>
          </div>
          <div className="mt-4">
            <div className="inline-flex">
              <button
                type="button"
                className="relative w-full md:w-[200px] mr-1 py-2 px-6 md:px-4 items-center gap-x-2 text-sm font-semibold rounded-l-md   disabled:opacity-50 disabled:pointer-events-none  bg-primary  text-gray-800 hover:bg-gray-50  dark:border-gray-700 dark:bg-[#Db2777]  dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              >
                Get Stars
              </button>

              <div className="hs-dropdown relative inline-flex ml-1 [--placement:top-left] ">
                <button
                  id="hs-split-dropup"
                  type="button"
                  className=" hs-dropdown-toggle relative -ms-[.3125rem] py-3 w-30 px-4 inline-flex items-center gap-x-2 text-sm font-semibold   bg-[#Db2777]  text-gray-800 hover:bg-[#Db2777] rounded-e-md "
                >
                  Stars
                  <span className="sr-only">Toggle Dropdown</span>
                  <svg
                    className="hs-dropdown rotate-180 w-4 h-4 "
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="m18 15-6-6-6 6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="mt-4 display flex ">
            <button
              type="button"
              className="relative w-full md:w-[295px] py-2 px-6 md:px-16   content-center text-center items-center  text-sm font-semibold rounded-lg   border-primary text-primary border"
            >
              Make Offer
            </button>
          </div>

          <div className="flex justify-between gap-4 p-4  border-[0.1px] border-gray-700 rounded-sm mt-12">
            <div>
              <p className="text-gray-600">Price</p>
              <p>19K STARS</p>
            </div>

            <div>
              <p className="text-gray-600">Last Sale</p>
              <p>3.8K STARS</p>
            </div>

            <div>
              <p className="text-gray-600">Owner</p>
              <p className="text-primary">toasty</p>
            </div>

            <div>
              <p className="text-gray-600">Top Offer</p>
              <p>6.13K STARS</p>
            </div>

            <div>
              <p className="text-gray-600">Floor Price</p>
              <p>7.8K STARS</p>
            </div>
          </div>
          <div className=" gap-4 p-4  border-[0.1px] border-gray-700 rounded-sm mt-12">
            <div className="display flex flex-col">
              <div className=" display flex  row">
                <img
                  src={"/img/menu.svg"}
                  alt={"dollar"}
                  className="w-6 h-6 rounded-xl mb-10 mr-2"
                />
                <p>Top Offers</p>
              </div>
              <table className="table-  ">
                <thead>
                  <tr>
                    <th>Type</th>
                    <th>Accept Offer</th>
                    <th>Floor </th>
                    <th>Offers </th>
                  </tr>
                </thead>
                <tbody></tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
