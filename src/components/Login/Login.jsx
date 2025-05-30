import { React, useState } from "react";
import { useUserContext } from "../context/index";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");

  //usercontext
  const { setUserData } = useUserContext();

  //handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData({
      name: userName,
      email: email,
    });
  };

  return (
    <>
      <div>
        <form
          className="flex flex-col gap-5 mb-7 bg-slate-500 p-4 rounded-2xl"
          onSubmit={handleSubmit}
        >
          <input
            className="bg-white text-slate-800 rounded outline-none p-3"
            type="text"
            placeholder="username"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
          <input
            className="bg-white text-slate-800 rounded outline-none p-3"
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <button
            className="bg-red-300 rounded text-white p-3 hover:bg-red-400 hover:cursor-pointer "
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
