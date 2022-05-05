import Body from "./components/Body";
import Header from "./components/Header";
import { createContext, useState } from "react";
import Login from "./components/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ContextStore = createContext();
import { firebaseDatabase } from "./util/config";
import { ref, onValue } from "firebase/database";
import imageCoding from "./images/coding.png";
function App() {
  const submitData = (data) => {
    console.log(data);
  };
  const [timer, setTimer] = useState({
    hours: "00",
    mins: "00",
    secs: "00",
  });
  const [mainStore, setMainStore] = useState({
    isLoginEnable: false,
    isStartingTest: false,
    isLogin: false,
    userName: "",
    roll:"",
    mail:"",
    timeOut: false,
    submitData,
  });
  console.log(mainStore);
  onValue(ref(firebaseDatabase, "start/"), (snapshot) => {
    const data = snapshot.val();
    if (mainStore.isLoginEnable != data.startingNow) {
      setMainStore((e) => {
        var t = {
          isLoginEnable: data.startingNow,
        };
        return { ...e, ...t };
      });
    }
  });
  return (
    <ContextStore.Provider value={{ mainStore, setMainStore, timer, setTimer }}>
      <div className="container">
        {!mainStore.isLoginEnable ? (
          <Video />
        ) : !mainStore.isLogin ? (
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
const Video = () => {
  return (
    <>
      <div className="video">
        <img src={imageCoding} alt="" />
      </div>
    </>
  );
};
export { ContextStore };
export default App;
