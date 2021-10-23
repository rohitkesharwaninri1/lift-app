import React from "react";
import Lift from "./Lift";
import Button from "@material-ui/core/Button";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import DoorImg from "../assests/door.png";
import FloorImg from '../assests/floorImg.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${FloorImg})`,
    width: "100%",
    height: "400px",
    backgroundPositionY: "75%",
    backgroundRepeat: "no-repeat",
    backgroundColor: "#dadada",
    backgroundSize: "cover",
    borderBottom: "10px solid #000000",
    padding: "20px 100px",
  },
  container:{
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },
  doorContainer: {
    display: "flex",
    width: "50%",
    height: "100%",
    justifyContent: "space-between",
  },
}));

export default function Floor(props) {
  const classes = useStyles();
  const { data, liftInFloor, handleLift } = props;

  const onIncrement = () => {
    handleLift(data + 1);
  };
  const onDecrement = () => {
    handleLift(data + 1);
  };
  return (
    <div className={classes.root}>
      <Typography variant="h5" style={{ textAlign: "center" }}>
        F-{data + 1}
      </Typography>

      <div
      className={classes.container}>
        <div style={{ width: "100px" }}>
          <Button
            endIcon={<ExpandLessIcon />}
            variant="outlined"
            style={{ width: "100%", marginBottom: "10px" }}
            color="primary"
            onClick={onIncrement}
          >
            Up
          </Button>
          <Button
            endIcon={<ExpandMoreIcon />}
            variant="outlined"
            style={{ width: "100%" }}
            color="primary"
            onClick={onDecrement}
          >
            Down
          </Button>
        </div>

        {liftInFloor === data + 1 && <Lift />}

        <div className={classes.doorContainer}>
          <img alt="door" src={DoorImg} width="160px" style={{ objectFit: "contained" }} />
          <img alt="door" src={DoorImg} width="160px" style={{ objectFit: "contained" }} />
          <img alt="door" src={DoorImg} width="160px" style={{ objectFit: "contained" }} />
        </div>
      </div>
    </div>
  );
}
