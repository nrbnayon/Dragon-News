import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header";
import NavBar from "../Shared/NavBar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import LeftSideNav from "./../Shared/LeftSideNav/LeftSideNav";
import BreakingNews from "./BreakingNews";
import MainNewsCard from "./MainNewsCard";

const Home = () => {
  const news = useLoaderData();
  return (
    <div>
      <Header />
      <BreakingNews />
      <NavBar />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        <div className="border">
          <LeftSideNav />
        </div>
        <div className="md:col-span-2 border">
          {news.map((singleNews) => (
            <MainNewsCard key={singleNews._id} singleNews={singleNews} />
          ))}
        </div>
        <div className="">
          <RightSideNav />
        </div>
      </div>
    </div>
  );
};

export default Home;
