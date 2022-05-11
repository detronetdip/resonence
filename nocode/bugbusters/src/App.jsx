import { createContext, useState } from "react";
import { ToastContainer } from "react-toastify";
import { ref, onValue } from "firebase/database";
import { firebaseDatabase } from "./util/config";
import Body from "./components/Body";
import Header from "./components/Header";
import Login from "./components/Login";
import imageCoding from "./images/coding.png";
import imageCoding2 from "./images/44.png";
import "react-toastify/dist/ReactToastify.css";
const ContextStore = createContext();
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
    isLoginEnable: true,
    isStartingTest: true,
    isLogin: true,
    userName: "",
    roll: "",
    mail: "",
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
        <img src={imageCoding2} alt="" className="fgh" />
        <div className="cpr">
          Developed By <span>Ayondip Jana</span>
        </div>
      </div>
    </>
  );
};
export { ContextStore };
export default App;
