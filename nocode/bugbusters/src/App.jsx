import Body from "./components/Body";
import Header from "./components/Header";
import { createContext, useState } from "react";
import Login from "./components/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ContextStore = createContext();
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
        {!mainStore.isLogin ? (
          <Login />
        ) : (
          <>
            <Header />
            <Body />
          </>
        )}
      </div>
      <ToastContainer autoClose={2000} />
    </ContextStore.Provider>
  );
}
export { ContextStore };
export default App;
