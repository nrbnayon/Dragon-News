import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";

const RightSideNav = () => {
  return (
    <div className="space-y-4">
      <div className="border rounded-sm p-2 space-y-3">
        <h3 className="text-2xl mb-4 font-bold">Login With</h3>
        <button className="btn w-full border border-primary">
          <FaGoogle />
          Login With Google
        </button>
        <button className="w-full btn border border-secondary">
          <FaGithub />
          Login With Github
        </button>
      </div>
      <div className="p-2">
        <h3 className="text-2xl mb-3 font-semibold">Find Us On</h3>
        <div className="border rounded-md p-4">
          <a
            href="https://www.facebook.com/nay.o.ii/"
            target="_blank"
            className="p-4 flex gap-2 items-center rounded-t-md border"
          >
            <FaFacebook />
            Facebook
          </a>
          <a
            href="https://www.facebook.com/nay.o.ii/"
            target="_blank"
            className="p-4 flex gap-2 items-center border-x"
          >
            <FaInstagram />
            Instagram
          </a>
          <a
            href="https://www.facebook.com/nay.o.ii/"
            target="_blank"
            className="p-4 flex gap-2 items-center rounded-b-md border"
          >
            <FaTwitter />
            Twitter
          </a>
        </div>
      </div>

      <div className="border rounded-sm p-4 space-y-1 bg-base-200">
        <h3 className="text-2xl mb-4 font-semibold">Q-Zone</h3>
        <img src={qZone1} />
        <img src={qZone2} />
        <img src={qZone3} />
      </div>
    </div>
  );
};

export default RightSideNav;
