import React from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white px-4 py-10 flex flex-col items-center">
      <img
        src="/bank-logo.png"
        alt="$BANK Logo"
        className="w-24 h-24 mb-6"
      />

      <h1 className="text-5xl font-bold mb-2">$BANK</h1>
      <p className="text-lg text-gray-400 mb-6 text-center max-w-md">
        The meme coin backed by your broken trust in the banking system. Solana's most secure vault for degenerates.
      </p>

      <a href="#" target="_blank" rel="noopener noreferrer">
        <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg py-3 px-6 rounded-2xl shadow-xl">
          Buy $BANK Now
        </Button>
      </a>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-16 max-w-4xl w-full">
        <Card className="bg-zinc-900 border border-yellow-500">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">What is $BANK?</h2>
            <p className="text-gray-300">
              $BANK is a decentralized meme token on Solana that mocks traditional finance while rewarding believers.
              No middlemen. No bailouts. Just memes and gains.
            </p>
            <p className="text-yellow-400 mt-4 text-sm break-all">
              CA: k5AMg1yUxaYTNXpVDpkrVn8VSgBe9K4t1pQYVCzbonk
            </p>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900 border border-yellow-500">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">Tokenomics</h2>
            <p className="text-gray-300">
              1 Billion Total Supply<br/>
              50% Burned 🔥<br/>
              25% Airdrops ✈️<br/>
              25% Liquidity Locked 💧<br/>
              0% Team Allocation 😎
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-20 text-center">
        <h3 className="text-3xl font-bold mb-4">Join the Bank Run</h3>
        <p className="text-gray-400 max-w-md mx-auto">
          Get in early before the vault doors close. The people’s bank is open for business — and it’s on fire.
        </p>
        <a
          href="https://dexscreener.com/solana/dst1qtvd3hf3fdnahcsuweuvwftdrdmgptjv6ivu6nsq"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="mt-6 bg-red-500 hover:bg-red-600 text-white font-bold text-lg py-3 px-6 rounded-2xl shadow-lg">
            View on Dexscreener
          </Button>
        </a>
      </div>

      <div className="mt-16 text-center">
        <h3 className="text-2xl font-semibold mb-2">Join the Community</h3>
        <p className="text-gray-400 mb-4">Hop into the Telegram to join the $BANK run and get updates:</p>
        <a href="https://t.me/BankCTO1" target="_blank" rel="noopener noreferrer">
          <Button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-xl">
            Join Telegram
          </Button>
        </a>
      </div>
    </div>
  );
}
