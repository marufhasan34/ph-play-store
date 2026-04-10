import React, { useContext } from "react";
import { FaStar } from "react-icons/fa";
import { GoCodeReview } from "react-icons/go";
import { MdOutlineFileDownload } from "react-icons/md";
import { InstalledAppsContext } from "../../Context/InstalledAppsContext";
import { toast } from "react-toastify";

const AppDetailsCard = ({ expectedApp }) => {
  const { installApps, setInstallApps } = useContext(InstalledAppsContext);
  const handleInstallApp = () => {
    setInstallApps([...installApps, expectedApp]);
    toast.success(`${expectedApp.title} is installed!`);
  };
  console.log(installApps)
  return (
    <div className="my-15 flex gap-10">
      <div className="bg-gray-200 p-8 rounded-2xl">
        <img className="w-57" src={expectedApp.image} alt="" />
      </div>
      <div className=" flex-1">
        <h2 className="font-bold text-3xl">{expectedApp.title}</h2>
        <h4 className="font-bold my-4 text-purple-500">
          {" "}
          <span className="font-light text-gray-500 ">
            Developed By :{" "}
          </span>{" "}
          {expectedApp.companyName}
        </h4>
        <div className="divider"></div>
        <div className="flex gap-20 text-center">
          <div className="">
            <MdOutlineFileDownload className="text-5xl text-green-600 mx-auto" />
            <p>Downloads</p>
            <h3 className="font-bold text-3xl">{expectedApp.downloads}</h3>
          </div>
          <div className="">
            <FaStar className="text-5xl text-amber-500 mx-auto" />
            <p>Downloads</p>
            <h3 className="font-bold text-3xl">{expectedApp.ratingAvg}</h3>
          </div>
          <div className="">
            <GoCodeReview className="text-5xl text-blue-600 mx-auto" />
            <p>Downloads</p>
            <h3 className="font-bold text-3xl">{expectedApp.reviews}</h3>
          </div>
        </div>
        <button
          onClick={handleInstallApp}
          className="py-2 cursor-pointer px-6 mt-5 text-white font-semibold rounded-xl bg-[#01e472]"
        >
          Install Now ({expectedApp.size}MB)
        </button>
      </div>
    </div>
  );
};

export default AppDetailsCard;
