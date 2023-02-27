import React from "react";
import lounge from "../../images/lounge_img.png";
import minimumImg1 from "../../images/Vector.svg";
import minimumImg2 from "../../images/Vector (1).svg";
import minimumImg3 from "../../images/Vector (2).svg";
import minimumImg4 from "../../images/Vector (3).svg";
import minimumImg5 from "../../images/Vector (4).svg";
import minimumImg6 from "../../images/Vector (5).svg";

const Perks = () => {
  return (
    <section className="pl-8 m:pl-24">
      <h1 className="capitalize md:text-3xl text-xl font-bold mt-4">
        <span className="underline decoration-orange-500 decoration-2 underline-offset-8">
          minimum living cost{" "}
        </span>
        takes care of everything
      </h1>
      <div className="grid md:grid-cols-3 grid-cols-1 auto-rows-auto gap-4 border-gray-900 items-center mt-8">
        <div className="md:col-span-1">
          <img src={lounge} alt="lounge" className="w-full block" />
        </div>
        <div className="grid grid-cols-3 md:grid-rows-2 md:col-span-2 gap-4 items-center">
          <div>
            <img
              src={minimumImg1}
              alt="pay"
              className="p-1 md:p-3 rounded-sm shadow-md mb-2"
            />
            <p className="text-xs md:text-xl w-4/6 font-bold capitalize">
              Pay as Little as possible!
            </p>
          </div>
          <div>
            <img
              src={minimumImg2}
              alt="pay"
              className="p-1 md:p-3 rounded-sm shadow-md mb-2"
            />
            <p className="text-xs md:text-xl w-4/6 font-bold capitalize">
              Enjoy wisdom of community!
            </p>
          </div>
          <div>
            <img
              src={minimumImg3}
              alt="pay"
              className="p-1 md:p-3 rounded-sm shadow-md mb-2"
            />
            <p className="text-xs md:text-xl w-5/6 font-bold capitalize">
              Let's somebody else take care of Landlord!
            </p>
          </div>
          <div>
            <img
              src={minimumImg4}
              alt="pay"
              className="p-1 md:p-3 rounded-sm shadow-md mb-2"
            />
            <p className="text-xs md:text-xl w-4/6 font-bold capitalize">
              Enjoy peaceful Environment!
            </p>
          </div>
          <div>
            <img
              src={minimumImg5}
              alt="pay"
              className="p-1 md:p-3 rounded-sm shadow-md mb-2"
            />
            <p className="text-xs md:text-xl w-4/6 font-bold capitalize">
              Stay Safe! Save Money!
            </p>
          </div>
          <div>
            <img
              src={minimumImg6}
              alt="pay"
              className="p-1 md:p-3 rounded-sm shadow-md mb-2"
            />
            <p className="text-xs md:text-xl w-4/6 font-bold capitalize">
              Pay for what you use !
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Perks;
