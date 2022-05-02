import React from "react";
import { firebaseDatabase } from "../../util/config";
import { set, ref } from "firebase/database";
function Home() {
  const enblLogin = () => {
    set(ref(firebaseDatabase, "start"), {
      startingNow: true,
    });
  };
  return (
    <div className="homeontainer">
      <header>
        <div className="write">
          <h4>Bug-Busters Admin</h4>
        </div>
      </header>
      <div className="restcontainer">
        <div className="row1">
          <button onClick={enblLogin}>Enable Login</button>
          <button>Start Test</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
