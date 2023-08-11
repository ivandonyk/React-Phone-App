import AppContext from "@/context/AppContext";
import React, { useContext } from "react";
import { BsArrowLeftShort } from "react-icons/bs";

export default function ButtonForm() {
  const { buttonDetails, setButtonDetails, setShowButtonForm } =
    useContext(AppContext);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setShowButtonForm(false);
  };

  return (
    <form onSubmit={handleFormSubmit} className="px-4 pt-3">
      <div className="flex items-center space-x-3">
        <BsArrowLeftShort
          onClick={() => setShowButtonForm(false)}
          className="cursor-pointer text-2xl text-blue-500"
        />
        <h3 className="text-xl font-bold">Buttons</h3>
      </div>

      <div className="w-full mt-6 space-y-5 rounded-md border-gray-300 text-sm border py-6 px-3">
        <div className="">
          <p className="text-sm text-gray-500 mb-1">Button Text</p>
          <input
            value={buttonDetails.text}
            onChange={(event) =>
              setButtonDetails((prev) => ({
                ...prev,
                text: event.target.value,
              }))
            }
            required
            className="w-full h-10 border border-gray-300 p-3 rounded-md"
            type="text"
            name="Button Text"
            placeholder="Button Text"
          />
        </div>

        <div className="">
          <p className="text-sm text-gray-500 mb-1">Button Link</p>
          <input
            value={buttonDetails.link}
            onChange={(event) =>
              setButtonDetails((prev) => ({
                ...prev,
                link: event.target.value,
              }))
            }
            required
            className="w-full h-10 border border-gray-300 p-3 rounded-md"
            type="url"
            name="Button Link"
            placeholder="Button Link"
          />
        </div>
      </div>

      <div className="flex mt-5 space-x-3">
        <button
          type="submit"
          className="w-40 h-10 rounded-md bg-blue-500 text-white"
        >
          Save Changes
        </button>
      </div>
    </form>
  );
}
