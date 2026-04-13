import { useState } from "react";
import axios from "axios";
import UseEffectHook from "./UseEffectHook/UseEffectHook";
import UseEffectHook2 from "./UseEffectHook/UseEffectHook2";

const App = () => {
  //!-------------->  API Calling
  const [firstDataSet, setFirstDataSet] = useState([]);
  const [secondDataSet, setSecondDataSet] = useState([]);
  const [thirdDataSet, setThirdDataSet] = useState([]);

  const getData1 = () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        setFirstDataSet(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getData2 = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    setSecondDataSet(data);
  };

  const getData3 = async () => {
    const res = await axios.get("https://picsum.photos/v2/list");
    setThirdDataSet(res.data);
  };

  return (
    <>
      <div>
        <div>
          <p>
            [---------- Calling API Type-01 Using
            Fetch(.then)------------------]
          </p>

          <div className="box">
            {firstDataSet.map((elem, idx) => (
              <h5 key={idx}>
                id: {elem.id} | title: {elem.title} | completed:{" "}
                {elem.completed.toString()}
              </h5>
            ))}
          </div>

          <button onClick={getData1}>Get Data</button>
        </div>

        <div>
          <p>
            {" "}
            [---------- Calling API Type-02 Using Fetch (ASYNC AWAIT)
            ------------------]{" "}
          </p>

          <div className="box">
            {secondDataSet.map((elem, idx) => (
              <h5 key={idx}>
                id: {elem.id} | name: {elem.name} | email: {elem.email}
              </h5>
            ))}
          </div>

          <button onClick={getData2}>Get Data</button>
        </div>

        <div>
          <p>
            {" "}
            [---------- Calling API Type-03 Using axios ------------------]{" "}
          </p>
          <div className="box">
            {thirdDataSet.map((elem, idx) => (
              <h5 key={idx}>name: {elem.author}</h5>
            ))}
          </div>

          <button onClick={getData3}>Get Data</button>
        </div>
      </div>

      <div>
        {/* --------------------> UseEffect Hook  <------------------------------- */}
        <UseEffectHook/>
        <UseEffectHook2/>
      </div>
    </>
  );
};

export default App;
