import { useState } from "react";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import { UserProvider } from "./components/context/index";

function App() {
  const [userData, setUserData] = useState({
    name: "ali",
    email: "ali@yahoo.com",
  });
  return (
    <UserProvider value={{ userData, setUserData }}>
      <div className="wrappper flex flex-col justify-center items-center w-full h-screen bg-slate-800 text-white  ">
        <Login />
        <div className="-result-wrapper bg-slate-500 rounded-2xl p-4">
          <Home />
          <Profile />
        </div>
      </div>
    </UserProvider>
  );
}

export default App;
