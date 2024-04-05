import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const RightSideNav = () => {
  return (
    <div className="space-y-4">
      <div className="border p-2 space-y-3">
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
        <h3 className="text-2xl mb-3 font-bold">Find Us On</h3>
        <div className="border rounded-md p-4 space-y-3">
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
            className="p-4 flex gap-2 items-center rounded-t-md border"
          >
            <FaInstagram />
            Instagram
          </a>
          <a
            href="https://www.facebook.com/nay.o.ii/"
            target="_blank"
            className="p-4 flex gap-2 items-center rounded-t-md border"
          >
            <FaTwitter />
            Twitter
          </a>
        </div>
      </div>
    </div>
  );
};

export default RightSideNav;
