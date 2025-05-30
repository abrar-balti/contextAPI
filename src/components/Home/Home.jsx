import React from "react";
import { useUserContext } from "../context/index";
const Home = () => {
  const { userData } = useUserContext();
  //   console.log(userData);
  return (
    <div>
      <span className="text-red-300 font-bold">Home:</span> {userData.name}
    </div>
  );
};

export default Home;
