"use client";
import { FunctionComponent, JSX, useState } from "react";
import Image from "next/image";
import WindowScreen from "./WindowScreen";
import ProductList from "./ProductList";
import { Dictionary } from "../types/common.types";

const Entry: FunctionComponent<{ dict: Dictionary }> = ({
  dict,
}): JSX.Element => {
  const [activeTab, setActiveTab] = useState("ready");

  return (
    <div className="flex relative w-full min-h-screen items-center justify-center p-4">
      <div className="fixed left-4 top-1/2 -translate-y-1/2">
        <span
          className="text-8xl font-graf font-bold tracking-widest select-none text-white text-stroke"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          DX402.COMPUTER
        </span>
      </div>
      <WindowScreen title="dx402.exe" dict={dict} onTabChange={setActiveTab}>
        {activeTab === "ready" && (
          <div className="flex relative flex-col w-full h-full items-center justify-center gap-4">
            <Image
              src="https://thedial.infura-ipfs.io/ipfs/QmUh4V4BUzchMAGpzstcXGRn5mffeEBQjE6XW353rFzFG7"
              alt="dx402"
              width={300}
              height={300}
              className="object-contain"
              draggable={false}
            />
            <span className="text-sm text-black select-none">25.12.25</span>
          </div>
        )}
        {activeTab === "supermarket" && <ProductList />}
      </WindowScreen>
    </div>
  );
};

export default Entry;
