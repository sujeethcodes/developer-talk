import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const fectchData = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:3003/userApi/users/register",
        {
          name: userName,
          email: email,
          password: password,
          phoneNumber: phoneNumber,
        }
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center  flex-col bg-neutral-800 h-screen">
        <div className="m-3 ">
          <div>
            <p className="text-center font-bold text-xl text-white">
              DevelopersTalk
            </p>
          </div>

          <div>
            <p className="text-center font-bold text-lg text-white">Signup</p>
          </div>

          <div className="item-center flex-justify-center">
            <div>
              <input
                type="text"
                className=" m-1 h-8 w-60 rounded-lg bg-zinc-300 text-center "
                placeholder="Name"
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
            </div>

            <div>
              <input
                type="text"
                className=" m-1 h-8 w-60 rounded-lg  bg-zinc-300 text-center"
                placeholder="PhoneNumber"
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                }}
              />
            </div>

            <div>
              <input
                type="text"
                className=" m-1 h-8 w-60 rounded-lg  bg-zinc-300 text-center"
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
        </div>

        <div className="">
          <button
            className="text-white bg-green-600 rounded-lg mr-5"
            onClick={() => {
              fectchData();
            }}>
            <span className="ml-2 mr-2 ">Signup</span>
          </button>
          <button
            className="text-white bg-green-600 rounded-lg ml-5"
            onClick={() => {
              navigate("/login");
            }}>
            <span className="ml-2 mr-2 ">SignIn</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Signup;
