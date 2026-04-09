import React from "react";
import { FaDownload, FaStar } from "react-icons/fa";
import { useLoaderData } from "react-router";

const TrendingApps = () => {
  const apps = useLoaderData();
  return (
    <div className="container mx-auto">
      <div className="text-center my-15">
        <h2 className="font-bold text-4xl mb-3">Trending Apps</h2>
        <p className="text-gray-500">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {apps.map((app,ind) => {
        return (
          <div key={ind} className="card card-body bg-base-100  shadow-lg border border-gray-300">
            <figure>
              <img
              className="w-48 rounded-lg"
                src={app.image}
                alt={app.title}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-2xl">{app.title}</h2>
              <div className="flex justify-between mt-4 items-center gap-60 md:gap-30 ">
                <p className="bg-gray-100 flex items-center gap-2 text-green-500  py-1 px-2 font-semibold rounded-md "><FaDownload/> {app.downloads}</p>
                <p className=" text-left flex items-center gap-2 bg-orange-100 text-orange-500 py-1 px-2 font-semibold rounded-md"><FaStar/> {app.ratingAvg}</p>
              </div>
            </div>
          </div>
        );
      })}
      </div>
    </div>
  );
};

export default TrendingApps;
