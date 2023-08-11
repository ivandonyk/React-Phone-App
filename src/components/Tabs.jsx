import React, { useState } from "react";
import classNames from "classnames";
import BlocksTab from "./BlocksTab";
import DesignTab from "./DesignTab";

export default function Tabs() {
  const [currentTab, setCurrentTab] = useState("blocks");

  const isBlocksSelected = currentTab === "blocks";
  const isDesignSelected = currentTab === "design";

  return (
    <div className="w-full max-w-xl border-l-2 h-screen">
      <div className="border-b flex font-semibold">
        <div
          onClick={() => setCurrentTab("blocks")}
          className={classNames("py-4 cursor-pointer w-full text-center", {
            "border-blue-400 border-b-4 text-blue-400": isBlocksSelected,
          })}
        >
          Blocks
        </div>
        <div
          onClick={() => setCurrentTab("design")}
          className={classNames("py-4 cursor-pointer w-full text-center ", {
            "border-blue-400 border-b-4 text-blue-400": isDesignSelected,
          })}
        >
          Design
        </div>
      </div>

      {isBlocksSelected && <BlocksTab />}
      {isDesignSelected && <DesignTab />}
    </div>
  );
}
