import React from "react";

const AddProperty = () => {
  return (
    <section className="px-8 md:px-24">
      <h2 className="capitalize text-center md:text-lg text-md font-bold mb-4">
        Your property with us and be Confident that Your Room will be Filled
        Out!
      </h2>
      <div className="shadow-xl border py-5">
        <h3 className="text-center text-orange-700 text-xl font-bold">
          Add a new property
        </h3>
        <div className="grid md:grid-cols-3 md:gap-8 gap-4 md:px-16 px-4 py-8">
          <div className="flex flex-col col-span-3 md:col-span-1 ">
            <label className="font-bold ">Name</label>
            <input
              type="text"
              placeholder="Enter name"
              className="form-input border py-2.5 rounded-md pl-3 placeholder:text-sm bg-gray-100 w-full outline-none"
            />
          </div>
          <div className="flex flex-col col-span-3 md:col-span-1">
            <label className="font-bold ">Address</label>
            <input
              type="text"
              placeholder="Enter address"
              className="form-input border py-2.5 rounded-md pl-3 outline-none placeholder:text-sm bg-gray-100"
            />
          </div>
          <div className="flex flex-col col-span-3 md:col-span-1">
            <label className="font-bold ">Unit Number</label>
            <input
              type="text"
              placeholder="Enter unit"
              className="form-input border py-2.5 rounded-md pl-3 outline-none placeholder:text-sm bg-gray-100"
            />
          </div>
          <div className="flex flex-col col-span-3 md:col-span-1">
            <label className="font-bold ">City</label>
            <select
              type="text"
              placeholder="Select city"
              className="form-input border py-2.5 rounded-md placeholder:pl-3 placeholder:text-sm bg-gray-100 outline-transparent text-gray-400 text-sm px-2"
            >
              <option value="New York">New York</option>
              <option value="San Franciso">San Franciso</option>
              <option value="New Orleans">New Orleans</option>
              <option value="NashVille">NashVille</option>
              <option value="Los Angeles">Los Angeles</option>
            </select>
          </div>
          <div className="flex flex-col col-span-3 md:col-span-1">
            <label className="font-bold ">State</label>
            <select
              type="text"
              placeholder="Enter state"
              className="form-input border py-2.5 rounded-md placeholder:pl-3 placeholder:text-sm bg-gray-100 outline-transparent text-gray-400 text-sm px-2"
            >
              <option value="San Franciso">San Franciso</option>
            </select>
          </div>
          <div className="flex flex-col col-span-3 md:col-span-1">
            <label className="font-bold ">Room Type</label>
            <select
              type="text"
              placeholder="Enter state"
              className="form-input border py-2.5 rounded-md placeholder:pl-3 placeholder:text-sm bg-gray-100 outline-transparent text-gray-400 text-sm px-2"
            >
              <option value="Single">Single</option>
            </select>
          </div>
          <div className="flex flex-col col-span-3 md:col-span-1">
            <label className="font-bold ">Price</label>
            <input
              type="text"
              placeholder="Enter price"
              className="form-input border py-2.5 rounded-md outline-none pl-3 placeholder:text-sm bg-gray-100"
            />
          </div>
          <div className="flex flex-col col-span-3">
            <label className="font-bold ">Description</label>
            <textarea
              type="text"
              placeholder="Enter description"
              className="form-input border py-2.5 rounded-md outline-none pl-3 placeholder:text-sm bg-gray-100 resize-none h-32"
            />
          </div>
          <div className="flex flex-col col-span-3 relative">
            <label className="font-bold ">Upload Photos</label>
            <input
              type="file"
              accept="image/jpeg, image/jpg, image/png"
              placeholder="Enter Description"
              className="bg-gray-100 file:bg-orange-600 file:absolute file:top-[20%] file:left-[25%] file:opacity-0 h-32 justify-center items-center border-dashed border-orange-500 border-2 resize-none w-full p-2 rounded focus-visible:outline-none text-xs"
            />
            <p className="absolute text-sm left-[25%] md:left-[40%] top-1/3">
              Drag your images here or{" "}
              <span className="font-bold text-orange-600">browse</span>
            </p>
            <p className="absolute text-xs left-[25%] md:left-[40%] top-[60%] md:top-1/2 ml-8 text-black opacity-50">
              Supported: JPG, JPEG, PNG
            </p>
          </div>
        </div>
        <button className="text-white md:px-32 md:py-5 px-12 py-4 flex bg-orange-500 rounded-md mx-auto">
          Add a new property
        </button>
      </div>
    </section>
  );
};

export default AddProperty;
