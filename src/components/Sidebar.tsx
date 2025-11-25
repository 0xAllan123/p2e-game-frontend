/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useState } from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { MobileMenuIcon } from "./Svglist";

export default function Sidebar() {
  const [mobilMenuState, setMobileMenuState] = useState<boolean>(true);

  const isCollapsed = mobilMenuState;

  return (
    <nav
      className={`${isCollapsed ? "w-[80px]" : "w-[260px]"
        } lg:w-[260px] flex-col lg:flex fixed left-0 top-0 h-full z-50 border-r border-white-10 bg-gradient-to-b from-dark-4 via-dark-5 to-black-100/95 backdrop-blur-md shadow-subtle-shadow1 transition-[width] duration-300 ease-out`}
    >
      <div
        className={`flex lg:hidden w-full ${isCollapsed ? "justify-center" : "justify-end"
          } items-center cursor-pointer px-4 py-5`}
        onClick={() => setMobileMenuState(!mobilMenuState)}
      >
        <MobileMenuIcon color="white" />
      </div>

      <div
        className={`h-full overflow-y-auto scrollbar overflow-x-hidden ${isCollapsed ? "space-y-4" : "lg:space-y-0"
          }`}
      >
        <div className={`px-6 lg:block ${isCollapsed ? "hidden" : "block"}`}>
          <h1 className="pt-8 text-[28px] font-[900] bg-gra_font bg-clip-text text-transparent leading-tight">
            SlowRUG
          </h1>
          <p className="mt-1 text-sm text-white-60">
            On-chain PvP p2e on Solana
          </p>
          <div
            className={`w-full my-6 lg:block ${isCollapsed ? "hidden" : "block"
              }`}
          >
            <WalletMultiButton />
          </div>
        </div>

        <p
          className={`mt-6 pb-3 mx-6 text-[11px] font-semibold uppercase tracking-[0.22em] text-white-50 border-b border-white-10 lg:block ${isCollapsed ? "hidden" : "block"
            }`}
        >
          Games
        </p>

        <Link href="/room/the-tower" passHref>
          <a>
            <div className="mx-3 mt-4 flex items-center rounded-xl px-4 py-3 hover:bg-white-10 hover:border-r-2 hover:border-primary-5 transition-colors duration-150">
              <img
                src="/img/tower.png"
                alt="The Tower"
                className="w-6 h-6 mr-4 object-contain"
              />
              <p
                className={`lg:block cursor-pointer font-semibold text-white-100 text-sm ${isCollapsed ? "hidden" : "block"
                  }`}
              >
                The Tower
              </p>
            </div>
          </a>
        </Link>

        <Link href="/room/operators-hub" passHref>
          <a>
            <div className="mx-3 mt-1 flex items-center rounded-xl px-4 py-3 hover:bg-white-10 hover:border-r-2 hover:border-primary-5 transition-colors duration-150">
              <img
                src="/img/tower.png"
                alt="Operators Hub"
                className="w-6 h-6 mr-4 object-contain"
              />
              <p
                className={`lg:block cursor-pointer font-semibold text-white-100 text-sm ${isCollapsed ? "hidden" : "block"
                  }`}
              >
                Operators Hub
              </p>
            </div>
          </a>
        </Link>

        <Link href="/room/infinite-rug" passHref>
          <a>
            <div className="mx-3 mt-1 flex items-center rounded-xl px-4 py-3 hover:bg-white-10 hover:border-r-2 hover:border-primary-5 transition-colors duration-150">
              <img
                src="/img/tower.png"
                alt="Infinite Rug"
                className="w-6 h-6 mr-4 object-contain"
              />
              <p
                className={`lg:block cursor-pointer font-semibold text-white-100 text-sm ${isCollapsed ? "hidden" : "block"
                  }`}
              >
                Infinite Rug
              </p>
            </div>
          </a>
        </Link>

        <p
          className={`mt-8 pb-3 mx-6 text-[11px] font-semibold uppercase tracking-[0.22em] text-white-50 border-b border-white-10 lg:block ${isCollapsed ? "hidden" : "block"
            }`}
        >
          Support
        </p>

        <Link href="https://discord.gg/aejTFT6hKY" passHref>
          <a>
            <div className="mx-3 mt-4 mb-6 flex items-center rounded-xl px-4 py-3 hover:bg-white-10 hover:border-r-2 hover:border-primary-5 transition-colors duration-150">
              <img
                src="/img/discord.png"
                alt="Discord"
                className="w-6 h-6 mr-4 object-contain"
              />
              <p
                className={`lg:block cursor-pointer font-semibold text-white-100 text-sm ${isCollapsed ? "hidden" : "block"
                  }`}
              >
                Discord
              </p>
            </div>
          </a>
        </Link>
      </div>
    </nav>
  );
}
