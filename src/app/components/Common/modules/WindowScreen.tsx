"use client";
import { FunctionComponent, JSX, ReactNode, useState } from "react";
import { Dictionary } from "../types/common.types";

const WindowScreen: FunctionComponent<{
  title: string;
  children: ReactNode;
  dict: Dictionary;
  onTabChange?: (tab: string) => void;
}> = ({ title, children, dict, onTabChange }): JSX.Element => {
  const [activeTab, setActiveTab] = useState("ready");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    onTabChange?.(tab);
  };

  return (
    <div className="flex relative flex-col w-11/12 max-w-4xl h-[40rem] bg-win-gray border-t-3 border-l-3 border-win-light shadow-win95 font-agave">
      <div className="flex relative flex-row items-center justify-between w-full h-8 bg-gradient-to-r from-win-blue to-win-blue-light px-1">
        <div className="flex relative flex-row items-center gap-2">
          <div className="flex relative w-5 h-5 bg-win-gray border-t-2 border-l-2 border-win-light border-r-2 border-b-2 border-r-win-dark border-b-win-dark items-center justify-center">
            <div className="w-3 h-3 bg-win-blue"></div>
          </div>
          <span className="text-white text-sm font-bold select-none">
            {title}
          </span>
        </div>
        <div className="flex relative flex-row items-center gap-0.5">
          <button className="flex relative w-5 h-5 bg-win-gray border-t-2 border-l-2 border-win-light border-r-2 border-b-2 border-r-win-dark border-b-win-dark items-center justify-center text-black text-xs font-bold hover:bg-win-hover active:border-t-win-dark active:border-l-win-dark active:border-r-win-light active:border-b-win-light">
            _
          </button>
          <button className="flex relative w-5 h-5 bg-win-gray border-t-2 border-l-2 border-win-light border-r-2 border-b-2 border-r-win-dark border-b-win-dark items-center justify-center text-black text-xs font-bold hover:bg-win-hover active:border-t-win-dark active:border-l-win-dark active:border-r-win-light active:border-b-win-light">
            □
          </button>
          <button className="flex relative w-5 h-5 bg-win-gray border-t-2 border-l-2 border-win-light border-r-2 border-b-2 border-r-win-dark border-b-win-dark items-center justify-center text-black text-xs font-bold hover:bg-win-hover active:border-t-win-dark active:border-l-win-dark active:border-r-win-light active:border-b-win-light">
            ×
          </button>
        </div>
      </div>
      <div className="flex relative flex-col w-full flex-1 min-h-0 p-0.5">
        <div className="flex relative flex-col w-full h-full bg-white border-t-2 border-l-2 border-win-dark border-r-2 border-b-2 border-r-win-light border-b-win-light overflow-hidden">
          {children}
        </div>
      </div>
      <div className="flex relative flex-row w-full h-6 border-t-2 border-win-mid">
        <button
          onClick={() => handleTabClick("ready")}
          className={`flex relative flex-row items-center px-2 h-full border-r-2 border-win-light border-t border-t-win-dark hover:bg-win-hover ${
            activeTab === "ready" ? "bg-win-light" : ""
          }`}
        >
          <span className="text-xs text-black select-none">{dict.common.ready}</span>
        </button>
        <button
          onClick={() => handleTabClick("supermarket")}
          className={`flex relative flex-row items-center px-2 h-full border-r-2 border-win-light border-t border-t-win-dark hover:bg-win-hover ${
            activeTab === "supermarket" ? "bg-win-light" : ""
          }`}
        >
          <span className="text-xs text-black select-none">{dict.common.supermarket}</span>
        </button>
      </div>
    </div>
  );
};

export default WindowScreen;
