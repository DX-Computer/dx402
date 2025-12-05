"use client";
import { FunctionComponent, JSX, ReactNode } from "react";
import { Dictionary } from "../types/common.types";

const WindowScreen: FunctionComponent<{
  title: string;
  children: ReactNode;
  dict: Dictionary;
}> = ({ title, children, dict }): JSX.Element => {
  return (
    <div className="flex relative flex-col w-11/12 max-w-4xl h-4/5 max-h-xl bg-win-gray border-t-3 border-l-3 border-win-light shadow-win95">
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
      <div className="flex relative flex-col w-full h-full p-0.5">
        <div className="flex relative flex-col w-full h-full bg-white border-t-2 border-l-2 border-win-dark border-r-2 border-b-2 border-r-win-light border-b-win-light overflow-auto p-4">
          {children}
        </div>
      </div>
      <div className="flex relative flex-row w-full h-6 border-t-2 border-win-mid">
        <div className="flex relative flex-row items-center px-2 h-full border-r-2 border-win-light border-t border-t-win-dark">
          <span className="text-xs text-black select-none">{dict.common.ready}</span>
        </div>
        <div className="flex relative flex-row items-center px-2 h-full border-r-2 border-win-light border-t border-t-win-dark">
          <span className="text-xs text-black select-none">{dict.common.supermarket}</span>
        </div>
      </div>
    </div>
  );
};

export default WindowScreen;
