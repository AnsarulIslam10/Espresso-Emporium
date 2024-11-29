import React, { useContext } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const SignIn = () => {
  const {signInUser} = useContext(AuthContext);
  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
    .then(result =>{
      // update last login time
      const lastSignInTime = result?.user?.metadata?.lastSignInTime;
      const loginInfo = {email, lastSignInTime};

      fetch(`http://localhost:5000/users`, {
        method: 'PATCH',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(loginInfo)
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
      })

    }).catch(error => {
      console.log(error)
    })

  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-10">
      <div className="w-full max-w-4xl mb-12">
        <Link to={"/"}>
          <button
            className="flex items-center gap-2 self-start text-3xl font-ranch text-amber-900"
            style={{ textShadow: "#1B1A1A 1px 0 10px" }}
          >
            <FaArrowLeft /> Back To Home
          </button>
        </Link>
      </div>
      <div className="bg-[#F4F3F0] shadow-xl rounded-lg p-12 w-full max-w-4xl">
        <div className="text-center">
          <h2 className="text-5xl text-amber-900 mb-2 font-ranch" style={{ textShadow: "#1B1A1A 1px 0 10px" }}>
            Sign In
          </h2>
        </div>

        {/* form */}
        <div className="card w-full shrink-0 max-w-2xl mx-auto font-ranch">
          <form onSubmit={handleSignIn} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#E3B577] text-2xl">Sign In</button>
            </div>
            <p className="text-lg">Don't Have An Account? <Link to={'/signup'} className="text-amber-600 hover:underline">Sign Up</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
