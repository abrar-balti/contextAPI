import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import { UserProvider } from "./components/context/userContext";

function App() {
  return (
    <>
      <UserProvider>
        <div className="wrappper flex flex-col justify-center items-center w-full h-screen bg-slate-800 text-white  ">
          <Login />
          <div className="-result-wrapper bg-slate-500 rounded-2xl p-4">
            <Home />
            <Profile />
          </div>
        </div>
      </UserProvider>
    </>
  );
}

export default App;
