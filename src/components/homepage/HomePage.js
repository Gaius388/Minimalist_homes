import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import mapImage from "../../images/Rectangle 1.png";
import flexible1 from "../../images/flexible1.png";
import flexible2 from "../../images/flexible2.png";
import flexible3 from "../../images/flexible3.png";
import flexible4 from "../../images/flexible4.png";
import profilePic from "../../images/Ellipse 4.png";
import mediaPreview from "../../images/media bg-cover.png";
import playBtn from "../../images/play_btn.svg";
import useFetch from "../useFetch";
import Property from "./Property";
import { CiSearch } from "react-icons/ci";
import AddProperty from "./AddProperty";
import Perks from "./Perks";
import Contact from "./Contact";

const HomePage = () => {
  const { loading, data } = useFetch();
  const [page, setPage] = useState(0);
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    if (loading) return;
    setHouses(data[page]);
  }, [loading, page]);

  const handlePage = (index) => {
    setPage(index);
  };

  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1;
      if (nextPage > data.length - 1) {
        nextPage = 0;
      }
      return nextPage;
    });
  };
  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1;
      if (prevPage < 0) {
        prevPage = data.length - 1;
      }
      return prevPage;
    });
  };

  return (
    <div className="relative">
      <section className="bg-cover h-full bg-center bg-background-image bg-no-repeat relative text-white block">
        <div className="flex md:justify-between flex-col md:flex-row py-24 items-center">
          <h2 className="text-3xl md:text-5xl md:ml-8 text-center md:text-left font-bold uppercase md:pr-16">
            The most affortable place to stay in the san franciso bay area
          </h2>
          <div className="flex flex-col w-full items-center mt-8">
            <img src={mapImage} alt="maps" className="w-4/5" />
            <div className="bg-[#f9f9f9] grid grid-cols-6 items-center text-black w-4/5 p-2 rounded-md mt-4">
              <select className="bg-transparent border text-sm focus-visible:outline-none md:p-4 pr-4 md:pr-8 col-span-2">
                <option value="All Type">All Type</option>
              </select>
              <select className="bg-transparent border text-sm focus-visible:outline-none md:p-4 md:pl-8 col-span-3">
                <option value="Neighbourhood">Neighbourhood</option>
              </select>
              <CiSearch className="text-2xl md:text-5xl bg-blue-200 md:p-4 rounded-r-md" />
            </div>
          </div>
        </div>
      </section>
      <Perks />
      <section className="bg-gray-100 my-8 pb-12">
        <div className="pt-8 md:pl-24 pl-8 flex justify-between items-center">
          <h1 className="text-sm md:text-3xl font-bold capitalize ">
            <span className="underline decoration-orange-500 decoration-2 underline-offset-4">
              List{" "}
            </span>
            of Properties
          </h1>
          <button className="p-2 md:p-4 bg-orange-500 rounded-md text-white text-xs md:text-md md:mr-24 mr-4">
            <Link to={"/properties"}>View All Properties</Link>
          </button>
        </div>
        <div className="md:px-24 my-12 flex flex-wrap justify-center gap-y-4 gap-2 px-4">
          {houses.map((house) => {
            return <Property key={house.property_id} {...house} />;
          })}
        </div>
        {!loading && (
          <div className="flex justify-center">
            <button
              className="p-1.5 md:p-4 border-2 border-black-700 shadow-lg md:text-lg text-xs text-orange-500 font-bold rounded-l-xl"
              onClick={prevPage}
            >
              Prev
            </button>
            {data.map((item, index) => {
              return (
                <button
                  className={`p-1 md:p-3 border-2 border-black-500 text-orange-500 font-bold shadow-md text-xs md:text-sm ${
                    index === page ? "bg-orange-700" : null
                  }`}
                  onClick={() => handlePage(index)}
                >
                  {index + 1}
                </button>
              );
            })}

            <button
              className="p-1.5 md:p-4 border-2 border-black-700 shadow-lg md:text-lg text-xs text-orange-500 font-bold rounded-r-xl"
              onClick={nextPage}
            >
              Next
            </button>
          </div>
        )}
      </section>
      <section className="flex gap-4 md:px-24 px-8 mb-12 md:flex-row flex-col flex-col-reverse">
        <div className="grid grid-cols-2 grid-rows-2 gap-4">
          <div>
            <img src={flexible1} alt="flexible" className="" />
          </div>
          <div className="mt-auto">
            <img src={flexible2} alt="flexible" className="" />
          </div>
          <div>
            <img src={flexible3} alt="flexible" className="h-5/6" />
          </div>
          <div>
            <img src={flexible4} alt="flexible" className="w-full" />
          </div>
        </div>
        <div className="grid content-center md:pl-12 md:ml-12 md:w-4/6 mx-auto text-center md:text-left my-8">
          <h2 className="font-extrabold md:text-5xl text-3xl leading-9">
            Flexibility and options to suit your lifestyle.
          </h2>
          <p className=" text-sm md:text-md leading-7 my-3 md:w-5/6">
            You need it? We got it. We make finding your next home easy,
            comfortable, and simple. From our happiness guarantee to our
            selective roommate finder option. We provide you the flexibility
            that you most desire.
          </p>
          <button className="text-white p-5 rounded-md bg-orange-500 md:mr-auto">
            Search Rooms
          </button>
        </div>
      </section>
      <AddProperty />
      <section className="grid md:grid-cols-2 md:grid-rows-1 grid-rows-2 mt-16 mb-8 items-center bg-[#f4511e12]">
        <div className="ml-8 md:ml-24 md:pl-8 pt-8 bg-ellipses bg-no-repeat bg-left-top row-end-3 md:row-end-1">
          <p className="text-lg pr-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            interdum nisl et nunc facilisis, a commodo eros mollis. Nunc vel
            pellentesque est. Curabitur at odio sit amet libero vulputate
            efficitur ac nec justo. Nulla vitae mauris quam. Nulla quam massa,
            faucibus id pretium ac, mattis eu velit. Donec sed risus a lacus
            fringilla finibus.
          </p>
          <div className="flex items-center gap-3">
            <img src={profilePic} alt="profile" className="my-4 h-12" />
            <div>
              <h5 className="text-orange-500 text-sm">Harry Wilson</h5>
              <p className="text-xs">Property owner</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            src={playBtn}
            alt="play_btn"
            className="absolute left-[42%] md:left-1/2 top-[45%]"
          />
          <img
            src={mediaPreview}
            alt="media preview"
            className="w-full ml-auto"
          />
        </div>
      </section>
      <Contact />
    </div>
  );
};

export default HomePage;
