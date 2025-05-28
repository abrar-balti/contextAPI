import React from "react";
import { useContext } from "react";
import { UserContext } from "../context/userContext";
const Home = () => {
  const { userdata } = useContext(UserContext);
  //   console.log(userData);
  return (
    <div>
      <span className="text-red-300 font-bold">Home:</span> {userdata.name}
    </div>
  );
};

export default Home;
