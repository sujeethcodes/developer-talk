import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signInFetchData = async () => {
    const { data } = await axios.post(
      "http://localhost:3003/userApi/users/signIn",
      {
        email: email,
        password: password,
      }
    );
    data?.message == "LOGIN SUCCESSFULLY"
      ? navigate("/home")
      : alert("INCORRECT PASSWORD");
    console.log(data);

    const myObj = {
      name: data?.userSignin.name,
      email: data?.userSignin.email,
    };
    localStorage.setItem("signInDetails", JSON.stringify(myObj));
  };

  return (
    <>
      <div className=" flex flex-col justify-center items-center  bg-neutral-800 h-screen">
        <div>
          <p className="text-center font-bold text-xl text-white">
            DevelopersTalk
          </p>
        </div>

        <div>
          <p className="text-center font-bold text-lg text-white">Sign-In</p>
        </div>

        <div className="item-center flex-justify-center mt-3">
          <div>
            <input
              type="text"
              className="  h-8 w-60 rounded-lg  bg-zinc-300 text-center m-2"
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          <div>
            <input
              type="text"
              className=" m-1 h-8 w-60 rounded-lg  bg-zinc-300 text-center"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="mt-5">
          <button
            className="text-white bg-green-600 rounded-lg ml-5"
            onClick={() => {
              signInFetchData();
            }}>
            <span className="ml-2 mr-2 ">Sign in</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Signin;
