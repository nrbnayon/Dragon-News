import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="hero min-h-screen bg-base-200 my-6 rounded-xl">
      <div className="hero-content flex-col">
        <div>
          <h3>Register Your Account</h3>
        </div>
        <div className="card shrink-1 w-full max-w-lg shadow-lg bg-base-100">
          <form
            // onSubmit={handleRegister}
            className="card-body"
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                name="username"
                placeholder="Enter your full name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Profile Image Url</span>
              </label>
              <div className="relative flex items-center w-full">
                <input
                  type="text"
                  name="imageUrl"
                  placeholder="Confirm your password"
                  className="input input-bordered w-full pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-0 top-0 h-full flex items-center justify-center p-2"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="relative flex items-center w-full">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Create a password"
                  className="input input-bordered w-full pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-0 top-0 h-full flex items-center justify-center p-2"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>
            <div className="form-control">
              <label className="flex gap-1">
                <input
                  type="checkbox"
                  name="terms"
                  className="checkbox checkbox-info"
                />
                <span className=" text-left">
                  Accepts our <a href="#">terms and conditions</a>
                </span>
              </label>
            </div>
            <div className="mt-4">
              <button className="btn btn-primary w-full">Register</button>
            </div>
            <Typography variant="small" className="mt-6 flex justify-center">
              Already have an account?
              <Link
                as="a"
                to="/login"
                variant="small"
                color="blue-gray"
                className="ml-1 font-bold"
              >
                Login here
              </Link>
            </Typography>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
