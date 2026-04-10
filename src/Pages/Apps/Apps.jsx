import { FadeLoader } from "react-spinners";
import AppCard from "../../Components/Ui/AppCard";
import UseApps from "../../Hooks/UseApps";

const Apps = () => {
  const { apps, loading } = UseApps();
  return (
    <div className="container mx-auto my-10">
      <div className="text-center my-15">
        <h2 className="font-bold text-4xl mb-3">Our All Applications</h2>
        <p className="text-gray-500">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      {loading ? (
        <div className="flex h-[60vh] justify-center items-center">
          {" "}
          <FadeLoader color="#ad46ff" />
        </div>
      ) : (
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {apps.map((app, ind) => {
            return <AppCard app={app} key={ind} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Apps;
