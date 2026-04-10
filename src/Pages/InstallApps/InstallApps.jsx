import React, { useContext } from "react";
import { InstalledAppsContext } from "../../Context/InstalledAppsContext";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { toast } from "react-toastify";

const InstallApps = () => {
  const { installApps, setInstallApps } = useContext(InstalledAppsContext);

  const handleUninstall = (app) => {
    const restApp = installApps.filter((iApp) => iApp.id != app.id);
    setInstallApps(restApp);
    toast.error(`${app.title} is Uninstalled!`);
  };
  return (
    <div>
      <div className="text-center my-15">
        <h2 className="font-bold text-4xl mb-3">Your Installed Apps</h2>
        <p className="text-gray-500">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      {installApps.length === 0 ? <h2 className="font-semibold text-center text-2xl my-20">No install apps found!</h2> : installApps.map((app, ind) => {
        return (
          <div className="container mx-auto" key={ind}>
            <div className=" flex mb-8 justify-between p-8 rounded-2xl items-center shadow-xl bg-gray-200 ">
              <div className="flex gap-5  ">
                <div>
                  <img className="h-30" src={app.image} alt="" />
                </div>
                <div>
                  <h2 className="font-bold text-2xl">{app.title}</h2>
                  <div className="flex items-center my-4 gap-5">
                    <p className="flex gap-1 items-center text-green-500">
                      {" "}
                      <MdOutlineFileDownload /> {app.downloads}
                    </p>
                    <p className="flex gap-1 items-center text-amber-500">
                      {" "}
                      <FaStar /> {app.ratingAvg}
                    </p>
                    <p className="text-gray-500">{app.size} MB</p>
                  </div>
                </div>
              </div>
              <div>
                <button
                  onClick={() => handleUninstall(app)}
                  className="btn btn-success text-white "
                >
                  Uninstall
                </button>
              </div>
            </div>
            <p> <span className="font-bold">description</span> :  {app.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default InstallApps;
