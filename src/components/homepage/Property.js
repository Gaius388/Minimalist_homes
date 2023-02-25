import React from "react";
import { MdBedroomParent, MdShower } from "react-icons/md";

const Property = ({ address, baths, beds, price, photos, prop_type }) => {
  const image = photos[0].href;
  const imageCut = image.slice(0, -5);
  const changeWidth = "x_1.jpg";
  const photo = `${imageCut}${changeWidth}`;
  return (
    <div className="shadow-md w-64 rounded-xl">
      <img src={photo} alt="display" className="h-48 w-full rounded-t-xl" />
      <div className="mx-4 my-2">
        <h3 className="font-bold capitalize mb-3">
          {`${address.street_number} ${address.neighborhood_name}, ${address.state}, ${address.state_code}, ${address.postal_code}`}
        </h3>
        <p className="text-sm text-gray-500">{prop_type}</p>
        <b className="text-lg text-orange-700">${price}/month</b>
      </div>
      <div className="grid grid-cols-3 ">
        <div className="flex justify-around items-center border border-black-500 py-2">
          <MdBedroomParent />
          <span>{beds}</span>
        </div>
        <div className="flex justify-around items-center border border-black-500">
          <MdShower />
          <span>{baths}</span>
        </div>
        <div className="flex justify-around items-center border border-black-500">
          <MdBedroomParent />
          <span>2</span>
        </div>
      </div>
    </div>
  );
};

export default Property;
