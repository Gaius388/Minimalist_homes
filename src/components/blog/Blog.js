import React from "react";
import { data } from "./data";

const Blog = () => {
  return (
    <div className="px-8 md:px-24 py-12">
      <h2 className="font-bold text-xl md:text-4xl capitalize text-orange-800">
        Real Estate blogs every realtor should read
      </h2>
      <div className="mt-8">
        {data.map((item, index) => {
          return (
            <article className="mb-4" key={index}>
              <p className="font-bold text-2xl text-orange-500 capitalize">
                {index + 1}. {item.name}
              </p>
              <p className="text-md py-4">
                <b>Best for: </b>
                {item.best}
              </p>
              <p className="md:w-4/6 mb-4">{item.details}</p>
              <p>
                <b>Must-read post: </b>
                <a href={item.link} target='_blank' className="text-orange-500 cursor-pointer" rel="noreferrer">
                  What You Need To Know
                </a>
              </p>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
