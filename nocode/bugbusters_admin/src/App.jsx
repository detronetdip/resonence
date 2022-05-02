import { createContext, useState } from "react";
import Home from "./components/Home";
import Login from "./components/Login";
const ContextStore = createContext();
import "./css/main.css";
function App() {
  const [mainStore, setMainStore] = useState({
    isLogin: false,
    userName: "",
    timeOut: false,
  });
  console.log(mainStore);
  return (
    <ContextStore.Provider value={{ mainStore, setMainStore }}>
      <div className="container">
        {
          !mainStore.isLogin?<Login/>:<Home/>
        }
      </div>
    </ContextStore.Provider>
  );
}
export { ContextStore };
export default App;
