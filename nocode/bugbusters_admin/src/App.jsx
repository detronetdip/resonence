import { createContext, useState } from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./css/main.css";
const ContextStore = createContext();
function App() {
  const [mainStore, setMainStore] = useState({
    isLogin: true,
    isStartingTest:false,
    userName: "",
    timeOut: false,
  });
  console.log(mainStore);
  return (
    <ContextStore.Provider value={{ mainStore, setMainStore }}>
      <div className="container">
        {!mainStore.isLogin ? <Login /> : <Home />}
      </div>
      <ToastContainer autoClose={2000} />
    </ContextStore.Provider>
  );
}
export { ContextStore };
export default App;
