import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const usenavigate = useNavigate();

  useEffect(() => {
    sessionStorage.clear();
  }, []);

  const ProceedLogin = (e) => {
    e.preventDefault();
    if (validate()) {
      fetch("http://localhost:3000/signup/" + email)
        .then((res) => {
          return res.json();
        })
        .then((resp) => {
          console.log(resp);

          if (Object.keys(resp).length === 0) {
            alert("Please Enter valid email");
          } else {
            if (resp.password === password) {
              alert("Success");
              sessionStorage.setItem("email", email);
              usenavigate("/home");
            } else {
              alert("please enter valid credentials");
            }
          }
        })
        .catch((err) => {
          alert("login failed due to :" + err.message);
        });
    }
  };

  const validate = () => {
    let result = true;
    if (email === "" || email === null) {
      result = false;
      alert("please enter email");
    }
    if (password === "" || password === null) {
      result = false;
      alert("please enter password");
    }
    return result;
  };

  return (
    <section className="bg-gray-50 min-h-screen flex items-center justify-center">
      {/* login container */}
      <div className="bg-gray-800 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
        {/* form */}
        <div className=" w-fit">
          <h2 className="font-bold text-2xl text-white">Welcome To</h2>
          <div className="flex">
            <h2 className="font-bold text-2xl text-[#f76c16]">Trace</h2>
            <h2 className="font-bold text-2xl text-[#e2e3e4]">Pharm</h2>
          </div>

          <p className="text-xs mt-4 text-white">
            If you are already a member, easily log in
          </p>
          <form action onSubmit={ProceedLogin} className="flex flex-col gap-4">
            <input
              className="p-2 mt-8 rounded-xl border"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <div className="relative">
              <input
                className="p-2 rounded-xl border w-full"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
            </div>
            <button
              type="submit"
              className="bg-white rounded-xl text-gray-800 py-2 hover:scale-105 duration-300"
            >
              Login
            </button>
          </form>

          <div className="mt-5 text-xs border-b border-[#ebedf0] py-4 text-[#ebedf0]">
            <a href="#">Forgot your password?</a>
          </div>
          <div className="mt-3 text-xs flex justify-between items-center text-[#ebedf0]">
            <p>Don't have an account?</p>
            <button className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">
              <a href="/signup">Register </a>
            </button>
          </div>
        </div>
        {/* image */}
      </div>
    </section>
  );
}
