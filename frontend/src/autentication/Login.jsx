import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiMail, FiLock } from "react-icons/fi";
//import { useGoogleLogin } from "@react-oauth/google";
 import axios from "axios";

const Login = () => {

  const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLoginJWT = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post("http://localhost:3000/api/auth/login", {
      email,
      password,
    });

    const token = res.data.token;
    // Save token to localStorage
    localStorage.setItem("token", token);
    //console.log("Login successful, token:", token);

    navigate("/mainComp");
  } catch (error) {
    console.error("Login failed", error);
    alert("Invalid credentials. Please try again.");
  }
};


  // const handleGoogleLogin = useGoogleLogin({
  //   onSuccess: async (tokenResponse) => {
  //     try {
  //       const res = await axios.post("http://localhost:5000/api/auth/google", {
  //         token: tokenResponse.code || tokenResponse.access_token,
  //       });
  //       console.log("Google login successful", res.data);
  //       navigate("/mainComp");
  //     } catch (error) {
  //       console.error("Google login failed", error);
  //       alert("Google login failed");
  //     }
  //   },
  //   onError: () => {
  //     alert("Google login error");
  //   },
  //   flow: "auth-code", // use "implicit" if not using server-side
  // });

  // const handleGitHubLogin = async () => {
  //   try {
  //     const res = await axios.get("http://localhost:3000/api/auth/login");
  //     if (res.data.url) {
  //       window.location.href = res.data.url;
  //     }
  //   } catch (error) {
  //     console.error("GitHub login failed", error);
  //     alert("GitHub login failed");
  //   }
  // };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]">
      <div className="absolute top-6 left-6 flex items-center gap-2">
        <img
          src="/src/assets/aiimg1.jpg"
          alt=""
          className="w-10 h-10"
        />
        <h1 className="text-2xl font-bold text-white">
          <span className="text-pink-500">Ai</span>
          <span className="text-purple-500">-CODE-REVIEW</span>
        </h1>
      </div>

      <div className="w-full max-w-md p-8 rounded-2xl shadow-2xl bg-white/10 backdrop-blur-md border border-white/10">
        <h2 className="text-3xl font-semibold text-center text-white">
          Welcome Back
        </h2>
        <p className="text-gray-300 text-sm text-center mt-1">
          Sign in to continue your coding journey
        </p>

        {/* OAuth Buttons */}
        <div className="flex justify-center gap-6 mt-6 mb-4">
          <button
            // onClick={handleGoogleLogin}
            className="cursor-pointer rounded-full p-2 border border-white/20 hover:bg-white/10 transition"
          >
            <img
              src="https://developers.google.com/identity/images/g-logo.png"
              alt="Google"
              className="w-6 h-6"
            />
          </button>
          <button
            // onClick={handleGitHubLogin}
            className="cursor-pointer rounded-full p-2 border border-white/20 hover:bg-white/10 transition"
          >
            <img
              src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
              alt="GitHub"
              className="w-6 h-6 bg-white rounded-full"
            />
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-600" />
          <span className="mx-3 text-sm text-gray-400">or continue with</span>
          <hr className="flex-grow border-gray-600" />
        </div>

        <form
          onSubmit={handleLoginJWT} 
         className="space-y-4">
          <div className="bg-white/10 border border-white/20 rounded-md px-3 py-2 flex items-center gap-2">
            <FiMail className="text-white" />
            <input
                 type="email"
                 placeholder="your@email.com"
                 required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                  className="bg-transparent outline-none text-white w-full placeholder-gray-300"
/>
          </div>
          <div className="bg-white/10 border border-white/20 rounded-md px-3 py-2 flex items-center gap-2">
            <FiLock className="text-white" />
            <input
               type="password"
               placeholder="••••••••"
               required
               value={password}
               onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-transparent outline-none text-white placeholder-gray-300"
/>
          </div>

          <div className="flex items-center justify-between text-sm text-gray-300">
            <label className="flex items-center gap-1">
              <input type="checkbox" className="accent-purple-500" />
              Remember me
            </label>
            <a href="#" className="text-purple-400 hover:underline">
              Forgot your password?
            </a>
          </div>

          <button
          //onSubmit={handleLoginJWT} 
            type="submit"
            className="cursor-pointer w-full py-2 mt-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:opacity-90 transition"
          >
            Sign in →
          </button>
        </form>

        <p className="text-center text-gray-300 text-sm mt-4">
          Don’t have an account?{" "}
          <a href="#" className="text-pink-400 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
