import AppCard from "../Ui/AppCard";
import { FadeLoader } from "react-spinners";
import { Link } from "react-router";
import UseApps from "../../Hooks/UseApps";

const TrendingApps = () => {
  const {apps,loading} = UseApps()
  return (
    <div className="container mx-auto">
      <div className="text-center my-15">
        <h2 className="font-bold text-4xl mb-3">Trending Apps</h2>
        <p className="text-gray-500">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      {loading ? (
        <div className="flex justify-center items-center">
          {" "}
          <FadeLoader color="#ad46ff" />
        </div>
      ) : (
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {apps.slice(0, 9).map((app, ind) => {
            return <AppCard app={app} key={ind} />;
          })}
        </div>
      )}
      <div className="text-center mt-19">
        <Link to={"/apps"}>
          <button className="py-3 px-10 font-semibold cursor-pointer rounded-full bg-purple-500 text-white">
            View All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TrendingApps;
