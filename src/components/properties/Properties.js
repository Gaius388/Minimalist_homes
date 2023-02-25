import React, { useState } from "react";
import useFetch from "../useFetch";
import Property from "../homepage/Property";

const Properties = () => {
  const { properties, setProperties } = useFetch();
  const [apartment, setApartment] = useState(properties);

  const filterItems = (category) => {
    if (category === "All") {
      setApartment(properties);
      return;
    }
    const newItems = properties.filter(
      (property) => property.prop_type === category
    );
    setApartment(newItems);
  };
  return (
    <div>
      <h2 className="uppercase md:text-3xl md:text-left text-center text-2xl font-bold pl-4 mt-2">
        Properties available
      </h2>
      <nav className="list-none uppercase flex items-center gap-6 py-8 pl-4 md:text-xl">
        <li
          className="cursor-pointer hover:bg-orange-300 px-2 py-1 rounded-md"
          onClick={(e) => {
            filterItems(e.target.innerHTML);
          }}
        >
          All
        </li>
        <li
          className="cursor-pointer hover:bg-orange-300 px-2 py-1 rounded-md"
          onClick={() => {
            filterItems("condo");
          }}
        >
          condo apartment
        </li>
        <li
          className="cursor-pointer hover:bg-orange-300 px-2 py-1 rounded-md"
          onClick={() => {
            filterItems("single_family");
          }}
        >
          single family apartment
        </li>
        <li
          className="cursor-pointer hover:bg-orange-300 px-2 py-1 rounded-md"
          onClick={() => {
            filterItems("multi_family");
          }}
        >
          multi family apartment
        </li>
      </nav>
      <div className="flex flex-wrap md:flex-row gap-6 justify-center items-center px-8 py-8">
        {apartment.map((property) => {
          console.log(apartment);
          return <Property key={property.property_id} {...property} />;
        })}
      </div>
    </div>
  );
};

export default Properties;
