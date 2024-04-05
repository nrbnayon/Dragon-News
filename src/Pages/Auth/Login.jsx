import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="hero min-h-screen bg-base-200 my-6 rounded-xl">
      <div className="hero-content flex-col ">
        <div>
          <h3>Login Your Account</h3>
        </div>
        <div className="card shrink-0 w-full max-w-lg shadow-lg bg-base-100">
          <form
            // onSubmit={handleLogin}
            className="card-body"
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                // ref={emailRef}
                placeholder="Enter your email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a
                  // onClick={handleForgetPassword}
                  href="#"
                  className="label-text-alt link link-hover"
                >
                  Forgot password?
                </a>
              </label>
              {/* {loginError && <p>{loginError}</p>} */}
              <div className="mt-4">
                <button className="btn btn-primary w-full">Login</button>
              </div>
            </div>
            <Typography variant="small" className="mt-6 flex justify-center">
              Don&apos;t have an account?
              <Link
                as="a"
                to="/register"
                variant="small"
                color="blue-gray"
                className="ml-1 font-bold"
              >
                Register now
              </Link>
            </Typography>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
