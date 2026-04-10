import React, { useContext } from "react";
import { InstalledAppsContext } from "../../Context/InstalledAppsContext";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaStar } from "react-icons/fa";

const InstallApps = () => {
  const { installApps, setInstallApps } = useContext(InstalledAppsContext);

  console.log(installApps, setInstallApps);
  return (
    <div>
      <div className="text-center my-15">
              <h2 className="font-bold text-4xl mb-3">Your Installed Apps</h2>
              <p className="text-gray-500">
                Explore All Trending Apps on the Market developed by us
              </p>
            </div>
      {installApps.map((app, ind) => {
        return (
          <div className="container mx-auto" key={ind}>
            <div className=" flex mb-8 justify-between p-8 rounded-2xl items-center shadow-xl bg-gray-200 ">
                <div className="flex gap-5  ">
                    <div><img className="h-30" src={app.image} alt="" /></div>
                    <div>
                        <h2 className="font-bold text-2xl">{app.title}</h2>
                        <div className="flex items-center my-4 gap-5">
                           <p className="flex gap-1 items-center text-green-500"> <MdOutlineFileDownload /> {app.downloads}</p>
                            <p className="flex gap-1 items-center text-amber-500"> <FaStar /> {app.ratingAvg}</p>
                            <p className="text-gray-500">{app.size} MB</p>
                        </div>
                    </div>
                </div>
                <div><button className="btn btn-success text-white ">Uninstall</button></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default InstallApps;
