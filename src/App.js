import React, { useState, useEffect } from "react";
import Floor from "./components/Floor";
import Ground from "./components/Ground";
import Header from "./components/Header";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: "#ECECEC",
    paddingTop: "100px",
  },
}));

export default function App() {
  const classes = useStyles();
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
    <div className={classes.root}>
      <Header getInput={getInput} />

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
