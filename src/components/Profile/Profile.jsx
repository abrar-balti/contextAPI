import { React, useContext } from "react";
import { UserContext } from "../context/userContext";
const Profile = () => {
  const { userdata } = useContext(UserContext);
  return (
    <div>
      <span className="text-red-300 font-bold">Profile:</span> {userdata.email}
    </div>
  );
};

export default Profile;
