import { React } from "react";
import { useUserContext } from "../context/index";
const Profile = () => {
  const { userData } = useUserContext();
  return (
    <div>
      <span className="text-red-300 font-bold">Profile:</span> {userData.email}
    </div>
  );
};

export default Profile;
