import React from "react";
import { FaDownload, FaStar } from "react-icons/fa";
import { Link } from "react-router";
const AppCard = ({ app }) => {
  return (
    <Link to={`/apps/${app.id}`} className="card card-body bg-base-100  shadow-lg border border-gray-300">
      <figure>
        <img className="w-48 rounded-lg" src={app.image} alt={app.title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl">{app.title}</h2>
        <div className="flex justify-between mt-4 items-center  ">
          <span className="bg-gray-100  flex items-center gap-2 text-green-500  py-1 px-2 font-semibold rounded-md ">
            <FaDownload /> {app.downloads}
          </span>
          <span className=" text-left flex items-center gap-2 bg-orange-100 text-orange-500 py-1 px-2 font-semibold rounded-md">
            <FaStar /> {app.ratingAvg}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default AppCard;
