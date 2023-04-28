import React from "react";
import axios from "axios";
import io from "socket.io-client";
import { IoMdAddCircle } from "react-icons/io";
import { AiOutlineSend } from "react-icons/ai";

const socket = io.connect("http://localhost:3003");

const Program = () => {
  const [frameWork, setFrameWork] = React.useState("");
  const [signInDetails, setSignInDetails] = React.useState("");
  const [talk, setTalk] = React.useState(false);
  const [textArea, setTeaxtArea] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [viewMesssage, setViewMessagae] = React.useState([]);
  const profileUpload = () => {
    alert(123);
  };

  React.useEffect(() => {
    setFrameWork(localStorage.getItem("FrameWork"));
  }, []);

  React.useEffect(() => {
    setSignInDetails(JSON.parse(localStorage.getItem("signInDetails")));
  }, []);

  const talks = () => {
    socket.emit("talks", {
      senderId: signInDetails.name,
      message: message,
    });
  };

  const viewAllMessage = () => {
    socket.on("recivedTalks", (data) => {
      setViewMessagae(data);
    });
  };
  console.log(viewMesssage);
  const talkApi = async () => {
    const { data } = await axios.post(
      "http://localhost:3003/userApi/talkRoute/getAllTalk"
    );
  };

  React.useEffect(() => {
    talkApi();
  });

  React.useEffect(() => {
    viewAllMessage();
  }, []);

  return (
    <>
      <div className="flex">
        <div className="w-[300px] bg-zinc-900 text-white h-screen">
          <div className="relative flex-col">
            <div className="ml-[100px]">
              <img
                src="./wallpaper.jpeg"
                alt=""
                className=" rounded-full mt-8 h-20 w-20"></img>
            </div>
            <div
              className=" absolute  right-[110px] text-lg cursor-pointer my-[-15px]"
              onClick={() => {
                profileUpload();
              }}>
              <IoMdAddCircle />
            </div>
          </div>

          <div className="text-center mt-10">
            {" "}
            <div>
              <p>{signInDetails.name}</p>{" "}
            </div>
            <div>
              <p>{signInDetails.email}</p>
            </div>
            <div>
              <p>{frameWork}</p>
            </div>
          </div>
        </div>

        <div className="bg-neutral-800 w-[1200px]">
          <p className="text-center font-bold text-2xl text-white P-2 mt-10">
            {frameWork}
          </p>
          <div>
            <p className="text-center mt-10 font-medium text-green-500">
              Dev Talk
            </p>
          </div>
          <hr />

          <div className="flex ml-20 ">
            <div>
              <img
                src="/wallpaper.jpeg"
                className=" rounded-full mt-[42px] mr-2 h-6 w-6"></img>
            </div>
            <div className="mt-10 ">
              <p className="text-green-500  ">{signInDetails.name}</p>
            </div>
          </div>
          <div className="flex">
            <textarea
              className="rounded-lg w-[600px] ml-20 mt-2 h-12 max-h-80 	"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
            <AiOutlineSend
              className="text-white right-0 mt-4 cursor-pointer text-lg ml-2"
              onClick={() => {
                talks();
              }}
            />
          </div>

          <div
            className="mt-2 cursor cursor-pointer"
            onClick={() => {
              setTalk(!talk);
            }}>
            {/* {viewMesssage.map((each) => (
              <p className="text-white ml-20"> {JSON.parse(each?.message)}</p>
            ))} */}
          </div>
          <div>
            {talk && (
              <div className="m-2">
                <button
                  className="text-white bg-green-600 pl-2 pr-2 rounded-lg ml-20 mt-2"
                  onClick={() => {
                    setTeaxtArea(!textArea);
                  }}>
                  talk
                </button>
                {textArea && (
                  <div className="max-h:40 flex ">
                    <textArea
                      type="text"
                      className="rounded-lg w-[600px] ml-20 mt-2"
                      placeholder="write code"
                    />
                    <AiOutlineSend className="text-white right-0 mt-4 cursor-pointer text-lg ml-2" />
                  </div>
                )}

                <div className="ml-20 mt-6">
                  <div className="flex mt-2">
                    <div>
                      <img
                        src="/wallpaper.jpeg"
                        className=" rounded-full mr-2 h-6 w-6"></img>
                    </div>

                    <div>
                      <p className="text-green-600">Gandhi</p>
                    </div>
                  </div>

                  <p className="text-white">
                    const fs = require('fs'); fs. readFile('/path/to/file. txt',
                    (err, result) Log the file contents if no error console.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default Program;
