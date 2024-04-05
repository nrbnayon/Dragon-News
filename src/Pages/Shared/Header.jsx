import Logo from "../../assets/logo.png";
import moment from "moment";

const Header = () => {
  return (
    <div className="text-center space-y-3 my-6">
      <div className="">
        <img className="mx-auto bg-white rounded-md" src={Logo} />
      </div>
      <p className="text-base">Journalism Without Fear or Favour</p>
      <p className="text-xl">{moment().format("dddd, MMMM D, YYYY")}</p>
    </div>
  );
};

export default Header;
