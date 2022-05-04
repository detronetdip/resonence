import "../css/main.css";
import { useContext, useState, useEffect } from "react";
import { ContextStore } from "../App";
import {ref, onValue} from 'firebase/database'
import { firebaseDatabase } from "../util/config";

function Header() {
  const store = useContext(ContextStore);
  function statTimer() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var d=date.getDate();
    m += 10;
    var str = "May "+d+", 2022 " + h + ":" + m + ":" + s;
    console.log(str);
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
        store.setTimer((e) => {
          return { ...e, hours: hours };
        });
        store.setTimer((e) => {
          return { ...e, mins: minutes };
        });
        store.setTimer((e) => {
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
  onValue(ref(firebaseDatabase, "startTest/"), (snapshot) => {
    const data = snapshot.val();
    if (store.mainStore.isStartingTest != data.startingNow) {
      statTimer();
      store.setMainStore((e) => {
        var t = {
          isStartingTest: data.startingNow,
        };
        return { ...e, ...t };
      });
    }
  });
  return (
    <header>
      <div className="write">
        <h4>Bug-Busters</h4>
      </div>
      <div className="count">
        <div className="sgbox">
          <span id="hours">{store.timer.hours}</span>
        </div>
        <div className="sgbox">:</div>
        <div class="sgbox">
          <span id="mins">{store.timer.mins}</span>
        </div>
        <div className="sgbox">:</div>
        <div className="sgbox">
          <span id="secs">{store.timer.secs}</span>
        </div>
      </div>
      <div className="name">
        <h5>
          Welcome, <span>{store.mainStore.userName}</span>
        </h5>
      </div>
    </header>
  );
}

export default Header;
