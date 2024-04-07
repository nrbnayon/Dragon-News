import { Link } from "react-router-dom";
import NavBar from "../Shared/NavBar";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Login = () => {
  const { logIn } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    logIn(email, password)
      .then((result) => console.log(result.user))
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <NavBar />
      <div className="flex justify-center items-center flex-col min-h-[calc(100vh-20vh)] bg-base-200 my-6 rounded-xl">
        <div>
          <h3 className="text-3xl font-bold my-4">Login Your Account</h3>
        </div>
        <div className="w-full md:3/4 lg:w-1/2 p-4 md:p-6 shadow-lg bg-base-100 rounded-xl">
          <form className="w-full" onSubmit={handleLogin}>
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
              <p className="label">
                Forgot password?{" "}
                <Link to="#" className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </p>
              {/* {loginError && <p>{loginError}</p>} */}
              <div className="mt-4">
                <button className="btn btn-primary w-full">Login</button>
              </div>
            </div>
            <p className="mt-6 flex justify-center">
              Don&apos;t have an account?
              <Link to="/register"> Register now</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
