import React, { useContext } from "react";
import ButtonForm from "./ButtonForm";
import AppContext from "@/context/AppContext";
import { BsCalendar4Event } from "react-icons/bs";

export default function BlocksTab() {
  const { buttonDetails, showButtonForm, setShowButtonForm } =
    useContext(AppContext);

  if (showButtonForm) return <ButtonForm />;

  return (
    <div className="px-4 pt-3">
      {buttonDetails.text && (
        <div className="">
          <h5 className="text-gray-500 pt-2 pb-5 text-sm font-semibold">
            MY BLOCKS
          </h5>
          <div className="border rounded-md flex justify-between items-center px-3 py-3">
            <div className="flex items-center space-x-2">
              <BsCalendar4Event className="text-xl flex-shrink-0" />
              <h4 className="text-lg font-semibold">Buttons</h4>
            </div>

            <button
              onClick={() => setShowButtonForm(true)}
              className="border rounded-md font-semibold w-16 h-10 "
            >
              Edit
            </button>
          </div>
        </div>
      )}

      {!buttonDetails.text && (
        <div className="">
          <h5 className="text-gray-500 pt-4 pb-5 text-sm font-semibold">
            ADD BLOCKS
          </h5>
          <div className="grid w-full grid-cols-2 gap-1">
            <div className="border rounded-md flex items-center space-x-2 px-3 py-3">
              <BsCalendar4Event className="text-xl flex-shrink-0 text-blue-500" />
              <div className="">
                <h3 className="text-md font-semibold">Buttons</h3>
                <p className="text-sm text-gray-500">
                  Drive traffic to your website, blog or online store, or any
                  other web pages
                </p>
              </div>
              <button
                onClick={() => setShowButtonForm(true)}
                className="border rounded-md flex-shrink-0 bg-blue-50 w-16 h-10 text-blue-500 border-blue-500"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
