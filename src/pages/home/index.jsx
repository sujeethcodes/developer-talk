import React, { useEffect, useState } from "react";
import axios from "axios";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Navigate, useNavigate } from "react-router-dom";
import Language from "../language/index";
const Home = () => {
  const navigation = useNavigate();

  const [language, setLanguage] = useState([]);
  const [value, setValue] = useState([]);
  const [languagePopUp, setLanguagePopUp] = useState(false);

  const setLanguageFetchData = async () => {
    const { data } = await axios.post(
      "http://localhost:3003/userApi/proLanguage/findAllLanguage"
    );
    setLanguage(data);
  };

  useEffect(() => {
    setLanguageFetchData();
  }, []);

  return (
    <>
      <div className="bg-neutral-800 h-screen">
        <p className="text-center text-3xl text-green-500 font-sans font-bold">
          DEV TALK
        </p>
        <div className="mt-4 flex ">
          {language.map((each, index) => {
            return (
              <div
                key={index}
                className="m-4 cursor-pointer"
                onClick={() => {
                  setValue(each?.categories);
                }}>
                <img
                  key={index}
                  src={each?.languageImg}
                  alt=""
                  className="w-32 cursor-pointer"
                  onClick={() => {
                    setLanguagePopUp(!languagePopUp);
                  }}
                />
              </div>
            );
          })}
        </div>

        <div className="flex justify-center">
          <div className="opacity-5	"></div>
          {languagePopUp && (
            <div className=" w-40  text-black ">
              <AiOutlineCloseCircle
                className="text-lg text-green-500 cursor-pointer"
                onClick={() => {
                  setLanguagePopUp(!languagePopUp);
                }}
              />
              {value.map((each) => {
                return (
                  <div
                    onClick={() => {
                      navigation(`/${each}`);
                      localStorage.setItem("FrameWork", each);
                    }}
                    className="">
                    <p className=" text-black p-2 rounded-xl bg-green-500 border w-[10vw] m-2 text-center cursor-pointer ">
                      {each}
                    </p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default Home;
