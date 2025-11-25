/* eslint-disable @next/next/no-img-element */
import { Roundarrow, Tripledot } from "../components/Svglist";
import Playhistory from "../components/Playhistory";
import Sidebar from "../components/Sidebar";
import { API_URL, GRAVE_API_URL } from "../config";
import { useEffect, useState } from "react";
import { useSolanaPrice } from "../utils/util";
import { useSocket } from "../context/SocketContext";
import { useRouter } from "next/router";

export default function Home(props: { isMute: boolean; setIsMute: Function }) {
  const [recentWinnders, setRecentWinners] = useState([]);
  const [totalWins, setTotalWins] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const { data } = useSolanaPrice();
  const router = useRouter();

  const { gameData } = useSocket();

  const getWinners = async () => {
    try {
      const response = await fetch(API_URL + "getWinners");
      const data = await response.json();
      setRecentWinners(data?.slice(0, 3));
    } catch (error) {
      console.log(" --> getWinners:", error);
    }
  };

  const getSum = async () => {
    try {
      const response = await fetch(API_URL + "getTotalSum");
      const data = await response.json();
      if (data) {
        setTotalWins(data as number);
      }
    } catch (error) {
      console.log(" --> getSum:", error);
    }
  };

  const getTotalCount = async () => {
    try {
      const response = await fetch(API_URL + "getTimes");
      const data = await response.json();
      console.log(data);
      if (data) {
        setTotalCount(data as number);
      }
    } catch (error) {
      console.log(" --> getTotalCount:", error);
    }
  };

  useEffect(() => {
    getWinners();
    getSum();
    getTotalCount();
  }, [gameData]);

  const totalWagered =
    typeof data === "number" ? (totalWins * data * 1.04).toLocaleString() : "";
  const totalWon =
    typeof data === "number" ? (totalWins * data).toLocaleString() : "";

  return (
    <div className="flex min-h-screen w-full bg-bg bg-cover bg-no-repeat">
      <Sidebar />
      <main className="xl:w-[calc(100%-260px)] w-full flex flex-col ml-[80px] lg:ml-[260px] overflow-x-hidden">
        <div className="relative w-full pb-16">
          <div className="relative h-[260px] md:h-[420px] overflow-hidden rounded-b-3xl shadow-drop-shadow">
            <img
              src="/img/home-banner.jpg"
              alt="SlowRUG p2e banner"
              className="h-full w-full object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black-80 via-black-60/60 to-transparent" />
            <div className="absolute inset-y-0 left-0 flex flex-col justify-center px-6 md:px-12 space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white-60">
                Solana PvP p2e
              </p>
              <h2 className="text-2xl md:text-3xl lg:text-[32px] font-bold text-white-100 max-w-xl leading-snug">
                High-voltage, on-chain p2e games with transparent odds.
              </h2>
              <p className="text-sm md:text-base text-white-70 max-w-lg">
                Track real-time stats, review recent winners, and jump into your
                next round in just a few clicks.
              </p>
            </div>
          </div>

          <div className="px-4 pt-8 md:px-8">
            <p className="font-font-mono text-[22px] md:text-[26px] font-normal text-white-100 leading-9">
              Statistics
            </p>
            <div className="mt-4 flex flex-wrap gap-4 rounded-2xl">
              <div className="relative flex h-[200px] w-full flex-col justify-between rounded-2xl border border-white-10 bg-white-5/40 px-6 py-5 shadow-subtle-shadow1 backdrop-blur-md lg:w-[calc((100%-32px)/3)]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-6/90 shadow-subtle-shadow1" />
                    <span className="text-xs font-medium uppercase tracking-[0.16em] text-white-60">
                      Platform Volume
                    </span>
                  </div>
                  <Tripledot />
                </div>
                <div>
                  <p className="mt-4 text-[30px] font-semibold leading-[42px] text-white-100">
                    {totalWagered ? `$${totalWagered}` : "---"}
                  </p>
                  <p className="mt-2 text-sm font-normal leading-6 text-white-70">
                    Amount wagered across all games
                  </p>
                </div>
              </div>

              <div className="relative flex h-[200px] w-full flex-col justify-between rounded-2xl border border-white-10 bg-white-5/40 px-6 py-5 shadow-subtle-shadow1 backdrop-blur-md lg:w-[calc((100%-32px)/3)]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F257A0] shadow-subtle-shadow1" />
                    <span className="text-xs font-medium uppercase tracking-[0.16em] text-white-60">
                      Bets Placed
                    </span>
                  </div>
                  <Roundarrow />
                </div>
                <div>
                  <p className="mt-4 text-[30px] font-semibold leading-[42px] text-white-100">
                    {totalCount.toLocaleString()}
                  </p>
                  <p className="mt-2 text-sm font-normal leading-6 text-white-70">
                    Total bets placed all time
                  </p>
                </div>
              </div>

              <div className="relative flex h-[200px] w-full flex-col justify-between rounded-2xl border border-white-10 bg-white-5/40 px-6 py-5 shadow-subtle-shadow1 backdrop-blur-md lg:w-[calc((100%-32px)/3)]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#7A5AF8] shadow-subtle-shadow1" />
                    <span className="text-xs font-medium uppercase tracking-[0.16em] text-white-60">
                      Payouts
                    </span>
                  </div>
                  <Tripledot />
                </div>
                <div>
                  <p className="mt-4 text-[30px] font-semibold leading-[42px] text-white-100">
                    {totalWon ? `$${totalWon}` : "---"}
                  </p>
                  <p className="mt-2 text-sm font-normal leading-6 text-white-70">
                    Total value won by players
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-10 font-font-mono text-[22px] md:text-[26px] font-normal text-white-100 leading-9">
              Recent Players
            </p>

            <div className="mt-4 w-full overflow-x-auto rounded-2xl border border-white-10 bg-white-5/40 shadow-subtle-shadow1 backdrop-blur-md">
              <div className="min-w-[650px] px-4 py-4">
                <div className="mb-2 flex flex-row justify-between text-xs font-medium uppercase tracking-[0.16em] text-white-60">
                  <p className="w-[200px] text-center">Game</p>
                  <p className="w-[250px] text-center">Wallet</p>
                  <p className="w-[150px] text-center">Bet</p>
                  <p className="w-[150px] text-center">Payout</p>
                  <p className="w-[150px] text-center">TX</p>
                </div>
                {recentWinnders &&
                  recentWinnders.length !== 0 &&
                  recentWinnders.map((item: any, key) => (
                    <Playhistory
                      key={key}
                      game="The Tower"
                      user={item.user.slice(0, 4) + "..." + item.user.slice(-4)}
                      bet={`${item.bet_amount} SOL`}
                      payout={`${item.payout} SOL`}
                      tx={item.tx}
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
