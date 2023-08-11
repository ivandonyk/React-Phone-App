import React, { useContext } from "react";
import { PiPlugs } from "react-icons/pi";
import AppContext from "@/context/AppContext";
import classNames from "classnames";

export default function ThemePreview({ theme }) {
  const { theme: currentTheme, setTheme } = useContext(AppContext);

  const { name, background, buttonBackground, buttonBorderColor } = theme;

  return (
    <div className="flex cursor-pointer w-full items-center flex-col">
      <div
        className={classNames("border w-full p-1 h-44", {
          "border-blue-500": currentTheme.name === name,
        })}
      >
        <div
          onClick={() => setTheme(theme)}
          style={{ background }}
          className="border p-2 h-full w-full flex flex-col items-center"
        >
          <div className="rounded-full flex-shrink-0 flex text-xl bg-white mt-3 mb-4 text-gray-400 justify-center items-center h-8 w-8 border border-gray-300">
            <PiPlugs />
          </div>

          <button
            style={{
              background: buttonBackground,
              borderColor: buttonBorderColor,
            }}
            className="rounded-sm mb-2 w-full cursor-pointer text-center border h-6 font-semibold"
          ></button>
          <button
            style={{
              background: buttonBackground,
              borderColor: buttonBorderColor,
            }}
            className="rounded-sm mb-2 w-full cursor-pointer text-center border h-6 font-semibold"
          ></button>
        </div>
      </div>
      <p className="text-sm mt-1 text-gray-500">{name}</p>
    </div>
  );
}
