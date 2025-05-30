import { createContext, useContext } from "react";

// Create context
export const UserContext = createContext({
  name: "",
  email: "",
  setUserData: () => {},
});

// useContext
export const useUserContext = () => {
  return useContext(UserContext);
};

export const UserProvider = UserContext.Provider;

// user context provider

// Create provider component
// export const UserProvider = ({ children }) => {
//   const [userdata, setUserData] = useState({
//     name: "abrar",
//     email: "abrarbulti@gmail.com",
//   });

//   return (
//     <UserContext.Provider value={{ userdata, setUserData }}>
//       {children}
//     </UserContext.Provider>
//   );
// };
