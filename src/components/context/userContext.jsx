import { createContext, useState } from "react";

// Create context
export const UserContext = createContext();

// Create provider component
export const UserProvider = ({ children }) => {
  const [userdata, setUserData] = useState({
    name: "abrar",
    email: "abrarbulti@gmail.com",
  });

  return (
    <UserContext.Provider value={{ userdata, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};
