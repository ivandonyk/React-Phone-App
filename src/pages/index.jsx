import React, { useState } from "react";
import { AppProvider } from "@/context/AppContext";
import Phone from "@/components/Phone";
import Tabs from "@/components/Tabs";
import { Inter } from "next/font/google";
import classNames from "classnames";
import { themes } from "@/utils/constants";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [theme, setTheme] = useState(themes[0]);
  const [showButtonForm, setShowButtonForm] = useState(false);
  const [buttonDetails, setButtonDetails] = useState({ text: "", link: "" });

  return (
    <AppProvider
      value={{
        showButtonForm,
        setShowButtonForm,
        buttonDetails,
        setButtonDetails,
        theme,
        setTheme,
      }}
    >
      <div
        className={classNames("flex min-h-full items-stretch", inter.className)}
      >
        <div className="flex w-full h-screen bg-slate-100 justify-center items-center">
          <Phone />
        </div>
        <Tabs />
      </div>
    </AppProvider>
  );
}
