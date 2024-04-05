import Header from "../Shared/Header";
import NavBar from "../Shared/NavBar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import LeftSideNav from "./../Shared/LeftSideNav/LeftSideNav";
import BreakingNews from "./BreakingNews";

const Home = () => {
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
          <h3>News Coming soon</h3>
        </div>
        <div className="">
          <RightSideNav />
        </div>
      </div>
    </div>
  );
};

export default Home;
