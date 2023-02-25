import React from "react";
import useFetch from "../useFetch";

const Agent = () => {
  const { agents } = useFetch();
  return (
    <div className="grid md:grid-cols-3 gap-12 px-12 my-12 justify-between">
      {agents.map((agent) => {
        const { photo, full_name, office, phones, web_url, email } = agent;
        const image = photo.href;
        const imageCut = image.slice(0, -5);
        const changeWidth = "x_1.jpg";
        const images = `${imageCut}${changeWidth}`;
        return (
          <div
            className="uppercase border-2 grid justify-center py-4 rounded-lg"
            key={agent.advertiser_id}
          >
            <img
              src={images}
              alt="agent contact"
              className="w-28 h-28 rounded-full justify-self-center"
            />
            <div className="text-center text-lg mt-4">
              <h2 className="font-bold">{full_name}</h2>
              <p>
                <b>Office: </b> {office.name}
              </p>
              <p>
                <b>mail: </b> {email}
              </p>
              <p>
                <b>number: </b> {phones[0].number}
              </p>
              <button className="p-3 bg-orange-600 text-white font-bold rounded-md my-4">
                <a href={web_url} target="_blank" rel="noreferrer">
                  See more details
                </a>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Agent;
