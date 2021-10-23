import React, { useState, useEffect } from "react";
import Floor from "./components/Floor";
import Ground from "./components/Ground";

export default function App() {
  const [noOfFLoor, setNoOfFloor] = useState(4);
  const [liftArray, setLiftArray] = useState([]);
  const [liftInFloor, setLiftInFloor] = useState(0);

  useEffect(() => {
    let totalFloor = [];
    for (let i = 0; i < noOfFLoor - 1; i++) {
      totalFloor.push(i);
    }
    totalFloor.reverse();
    setLiftArray(totalFloor);
  }, [noOfFLoor]);

  const getInput = (e) => {
    e.preventDefault();
    setLiftInFloor(0);
    setNoOfFloor(4 + parseInt(e.target.floor.value));
  };

  const handleLift = (data) => {
    setLiftInFloor(data);
  };

  return (
    <div>
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <form onSubmit={getInput}>
          <input type="number" name="floor"></input>
          <button type="submit">Add floor</button>
        </form>
      </div>

      {noOfFLoor !== 0 &&
        liftArray.map((item, index) => (
          <Floor
            key={index}
            data={item}
            liftInFloor={liftInFloor}
            handleLift={handleLift}
          />
        ))}

      <Ground liftInFloor={liftInFloor} handleLift={handleLift} />
    </div>
  );
}
