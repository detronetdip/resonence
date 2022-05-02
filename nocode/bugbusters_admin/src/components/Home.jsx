import React,{useState} from "react";
import { firebaseDatabase } from "../../util/config";
import { set, ref } from "firebase/database";
function Home() {
  const enblLogin = () => {
    set(ref(firebaseDatabase, "start"), {
      startingNow: true,
    });
  };
  const [timer, setTimer] = useState({
    hours: "00",
    mins: "00",
    secs: "00",
  });
  function statTimer() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    m += 1;
    var str = "May 2, 2022 " + h + ":" + m + ":" + s;
    var countDownDate = new Date(str).getTime();
    var x = setInterval(function () {
      var now = new Date().getTime();
      if (countDownDate > now) {
        var distance = countDownDate - now;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        setTimer((e) => {
          return { ...e, hours: hours };
        });
        setTimer((e) => {
          return { ...e, mins: minutes };
        });
        setTimer((e) => {
          return { ...e, secs: seconds };
        });
      } else {
        clearInterval(x);
        store.setMainStore((e) => {
          var s = {
            timeOut: true,
          };
          return { ...e, ...s };
        });
      }
    }, 1000);
  }
  return (
    <div className="homeontainer">
      <header>
        <div className="write">
          <h4>Bug-Busters Admin</h4>
        </div>
      </header>
      <div className="restcontainer">
        <div className="row1">
        <div className="timer">
            <div className="sgbox">
              <span id="hours">{timer.hours}</span>
            </div>
            <div className="sgbox">:</div>
            <div class="sgbox">
              <span id="mins">{timer.mins}</span>
            </div>
            <div className="sgbox">:</div>
            <div className="sgbox">
              <span id="secs">{timer.secs}</span>
            </div>
          </div>
          <div className="btndiv">
            <button onClick={enblLogin}>Enable Login</button>
            <button>Start Test</button>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Home;
