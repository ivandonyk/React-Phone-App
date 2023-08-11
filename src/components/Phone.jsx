import React, { useContext } from "react";
import { PiPlugs } from "react-icons/pi";
import { SlSocialFacebook, SlSocialInstagram } from "react-icons/sl";
import { TfiEmail } from "react-icons/tfi";
import { RiTiktokLine } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import AppContext from "@/context/AppContext";

export default function Phone() {
  const { showButtonForm, buttonDetails, theme } = useContext(AppContext);
  const { background, textColor, buttonBackground, buttonBorderColor } = theme;

  return (
    <div className="rounded-3xl shadow-md border-2 border-gray-300 w-72 h-[35rem] p-1">
      <div
        style={{ background }}
        className="rounded-2xl overflow-y-auto overflow-x-hidden no-scroll border-2 border-gray-300 w-full h-full pt-6 flex flex-col items-center"
      >
        <div className="rounded-full bg-white flex-shrink-0 mb-7 flex text-3xl text-gray-400 justify-center items-center h-16 w-16 border border-gray-300">
          <PiPlugs />
        </div>

        <div className="px-4 mb-8 w-full">
          {(showButtonForm || buttonDetails.text) && (
            <a target="_blank" href={!showButtonForm && buttonDetails?.link}>
              <button
                style={{
                  color: textColor,
                  background: buttonBackground,
                  borderColor: buttonBorderColor,
                }}
                className="rounded-md w-full cursor-pointer text-center border-2 h-12 font-semibold"
              >
                {buttonDetails?.text}
              </button>
            </a>
          )}

          {!showButtonForm && !buttonDetails.text && (
            <div className="rounded-md w-full cursor-pointer border-dashed border-2 border-gray-300 bg-gray-100 pt-1 pr-2">
              <div className="flex justify-end">
                <AiOutlineClose />
              </div>
              <div className="flex text-gray-400 mb-4 justify-center space-x-3">
                <SlSocialFacebook />
                <SlSocialInstagram />
                <TfiEmail />
                <RiTiktokLine />
              </div>
            </div>
          )}
        </div>

        <div className="grid grid-cols-3 gap-1">
          {Array.from(Array(12)).map((_, index) => (
            <div key={index}>
              <img
                className="h-24 object-cover"
                src={`https://picsum.photos/id/1${index}/200/200.jpg?grayscale&blur=1`}
                alt="grid image"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
