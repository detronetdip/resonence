import React, { useState} from "react";
import { firebaseDatabase } from "../../util/config";
import {  ref, onValue } from "firebase/database";
import { BsChevronDoubleDown, BsChevronDoubleUp } from "react-icons/bs";
function Home() {
  const [responce, setResponce] = useState([]);
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
        <div className="submissions">
          <h4>All submissions</h4>
          {responce.map((e) => (
            <>
              <Submissions e={e} />
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

function Submissions({ e }) {
  const [expand, setExpand] = useState(false);
  const expandTHIS = () => {
    setExpand(!expand);
  };
  return (
    <>
      <div className="onesub">
        <div className="topc">
          <span className="name">{e.name}</span>
          <div className="exp">
            <div className="submittedT">
              <div className="sgbox">
                <span id="hours">{e.TimeLeft.hours}</span>
              </div>
              <div className="sgbox">:</div>
              <div class="sgbox">
                <span id="mins">{e.TimeLeft.mins}</span>
              </div>
              <div className="sgbox">:</div>
              <div className="sgbox">
                <span id="secs">{e.TimeLeft.secs}</span>
              </div>
            </div>
            {expand ? (
              <>
                <button onClick={expandTHIS}>
                  <BsChevronDoubleUp color="#fff" />
                </button>
              </>
            ) : (
              <>
                <button onClick={expandTHIS}>
                  <BsChevronDoubleDown color="#fff" />
                </button>
              </>
            )}
          </div>
        </div>
        {expand ? (
          <>
            <div className="expand">
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
              <p>
                <pre>
                  Question 7: <code>{e.q7}</code>
                </pre>
              </p>
              <p>
                <pre>
                  Question 8: <code>{e.q8}</code>
                </pre>
              </p>
              <p>
                <pre>
                  Question 9: <code>{e.q9}</code>
                </pre>
              </p>
              <p>
                <pre>
                  Question 10: <code>{e.q10}</code>
                </pre>
              </p>
              <p>
                <pre>
                  Question 11: <code>{e.q11}</code>
                </pre>
              </p>
              <p>
                <pre>
                  Question 12: <code>{e.q12}</code>
                </pre>
              </p>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default Home;
