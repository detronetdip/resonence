import React, { useState, useContext } from "react";
import { firebaseDatabase } from "../../util/config";
import { set, ref, onValue } from "firebase/database";
import { ContextStore } from "../App";
function Home() {
  const store = useContext(ContextStore);
  const [responce, setResponce] = useState([
    
  ]);
  const enblLogin = () => {
    set(ref(firebaseDatabase, "start"), {
      startingNow: true,
    });
  };
  const startTest = () => {
    set(ref(firebaseDatabase, "startTest"), {
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
    var str = "May 3, 2022 " + h + ":" + m + ":" + s;
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
      }
    }, 1000);
  }
  onValue(ref(firebaseDatabase, "startTest/"), (snapshot) => {
    const data = snapshot.val();
    if (store.mainStore.isStartingTest !== data.startingNow) {
      statTimer();
      store.setMainStore((e) => {
        var t = {
          isStartingTest: data.startingNow,
        };
        return { ...e, ...t };
      });
    }
  });
  var prevObj = {};
  onValue(ref(firebaseDatabase, "answers/"), (snapshot) => {
    const data = snapshot.val();
    if (prevObj !== data) {
      var a = [];
      var keys = Object.keys(data);
      for (let index = 0; index < keys.length; index++) {
        data[keys[index]]["name"] = keys[index];
        a.push(data[keys[index]]);
      }
      if (a.length != responce.length) {
        setResponce(a);
      }

      prevObj = data;
    }
  });
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
            <button onClick={startTest}>Start Test</button>
          </div>
        </div>
        {responce.map((e) => (
          <>
            <div className="submissions">
              <h4>All submissions</h4>
              <div className="onesub">
                <span className="name">{e.name}</span>
                <p>
                  <pre>
                    Question 1: <code>{e.q1}</code>
                  </pre>
                </p>
                <p>
                  <pre>
                    Question 2: <code>{e.q2}</code>
                  </pre>
                </p>
                <p>
                  <pre>
                    Question 3: <code>{e.q3}</code>
                  </pre>
                </p>
                <p>
                  <pre>
                    Question 4: <code>{e.q4}</code>
                  </pre>
                </p>
                <p>
                  <pre>
                    Question 5: <code>{e.q5}</code>
                  </pre>
                </p>
                <p>
                  <pre>
                    Question 6: <code>{e.q6}</code>
                  </pre>
                </p>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default Home;
