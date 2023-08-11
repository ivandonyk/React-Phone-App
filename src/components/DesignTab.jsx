import React from "react";
import ThemePreview from "./ThemePreview";
import { themes } from "@/utils/constants";

export default function DesignTab() {
  return (
    <div className="px-4 pt-7">
      <div className="border rounded-md py-4 px-3">
        <h2 className="font-bold text-lg">Themes</h2>

        <div className="grid grid-cols-4 mt-4 gap-x-3 gap-y-5">
          {themes.map((theme, index) => (
            <ThemePreview theme={theme} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
