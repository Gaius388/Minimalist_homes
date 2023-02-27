import React, { useState, useEffect } from "react";
import useFetch from "../useFetch";
import Property from "../homepage/Property";

const Properties = () => {
  const { properties, loading } = useFetch();
  const [apartment, setApartment] = useState([]);

  useEffect(() => {
    if (loading) return;
    setApartment(properties);
  }, [loading]);

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
      <h2 className="uppercase md:text-3xl md:text-left text-center text-xl font-bold pl-4 mt-2">
        Properties available
      </h2>
      <nav className="list-none uppercase flex items-center gap-2 md:gap-6 py-8 pl-1 md:pl-4 md:text-xl">
        <li
          className="cursor-pointer hover:bg-[#797ba6] md:text-xl text-xs py-1 rounded-md "
          onClick={(e) => {
            filterItems(e.target.innerHTML);
          }}
        >
          All
        </li>
        <li
          className="cursor-pointer hover:bg-[#797ba6] md:text-xl text-xs py-1 rounded-md"
          onClick={() => {
            filterItems("condo");
          }}
        >
          condo apartment
        </li>
        <li
          className="cursor-pointer hover:bg-[#797ba6] md:text-xl text-xs py-1 rounded-md"
          onClick={() => {
            filterItems("single_family");
          }}
        >
          single family apartment
        </li>
        <li
          className="cursor-pointer hover:bg-[#797ba6] md:text-xl text-xs py-1 rounded-md"
          onClick={() => {
            filterItems("multi_family");
          }}
        >
          multi family apartment
        </li>
      </nav>
      <div className="flex flex-wrap md:flex-row gap-6 justify-center items-center px-8 py-8">
        {apartment.map((property) => {
          return <Property key={property.property_id} {...property} />;
        })}
      </div>
    </div>
  );
};

export default Properties;
