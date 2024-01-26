import { useState } from "react";
//Importing Next
import Image from "next/image";
import Link from "next/link";
//Importing RainbowKit
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { WalletLoader } from "@/components/WalletLoader";

export default function NavBar() {
  const [isNavVisible, setNavVisibility] = useState(false);

  return (
    <header className="px-5 xs:px-6 md:px-8  shadow-lg dark:bg-[#000000BF]">
      <nav className="flex flex-wrap items-center justify-between mx-auto">
        <Link href="/" target="_self" className="py-4 pr-4">
          <Image
            src="/stargaze_logo_800.svg"
            alt="logo"
            width={90}
            height={90}
          />
        </Link>

        <div>
          <div className="relative inline-block text-left">
            <div>
              <button
                type="button"
                className="inline-flex w-full justify-center gap-x-1.5 rounded-md hover:bg-primary bg-none px-3 py-2 text-[13px] font-semibold  shadow-sm "
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
              >
                Mint
                <svg
                  className="-mr-1 h-5 w-5 "
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="relative inline-block text-left">
            <div>
              <button
                type="button"
                className="inline-flex w-full justify-center gap-x-1.5 rounded-md hover:bg-primary bg-none px-3 py-2 text-[13px] font-semibold  shadow-sm "
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
              >
                Trade
                <svg
                  className="-mr-1 h-5 w-5 "
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="relative inline-block text-left">
            <div>
              <button
                type="button"
                className="inline-flex w-full justify-center gap-x-1.5 rounded-md hover:bg-primary bg-none px-3 py-2 text-[13px] font-semibold  shadow-sm "
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
              >
                DAO
                <svg
                  className="-mr-1 h-5 w-5 "
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="relative inline-block text-left">
            <div>
              <button
                type="button"
                className="inline-flex w-full justify-center gap-x-1.5 rounded-md hover:bg-primary bg-none px-3 py-2 text-[13px] font-semibold  shadow-sm "
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
              >
                Analytics
                <svg
                  className="-mr-1 h-5 w-5 "
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>

          <button className="bg-none hover:bg-primary text-white font-bold py-2 px-4 rounded text-[13px]">
            Apps
          </button>
        </div>

        <div className="w-[200px] h-[50px] relative pt-1">
          <label
            htmlFor="default-search"
            className="mb-2 text-[13px] font-medium sr-only dark:text-gray"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-2 pl-10 text-sm text-gray-900  rounded-lg focus:outline-none focus:ring-2 "
              placeholder="Search..."
              required
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-gray focus:ring-4 focus:outline-none rounded-lg text-sm px-4 py-2"
            >
              <img
                src={"/img/command.svg"}
                alt={"bitkids"}
                className="w-[658px] h-[658px] rounded-xl "
              />
            </button>
          </div>
        </div>

        <button
          className=" relative bg-none text-white font-bold py-2 px-4 "
          style={{
            border: "2px solid",
            borderRadius: "10",
            borderImage: "linear-gradient(to right, #ff8c00, #ff0080)",
            borderImageSlice: 1,
          }}
        >
          Get STARS
        </button>

        <button className="inline-block relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
          <span className=" absolute top-1 right-0.5 block h-1 w-1 rounded-full ring-2 ring-primary bg-primary"></span>
        </button>

        <WalletLoader />
      </nav>
    </header>
  );
}
