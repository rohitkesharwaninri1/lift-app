import React from "react";
import Lift from "./Lift";
import Button from "@material-ui/core/Button";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import FloorImg from "../assests/floorImg.jpg";

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
  btn: {
    width: "100px",
    marginBottom: "10px",
    marginRight: "200px",
  },
}));

export default function Ground(props) {
  const classes = useStyles();
  const { liftInFloor, handleLift } = props;

  const onIncrement = () => {
    handleLift(0);
  };

  return (
    <div className={classes.root}>
      <Typography variant="h5" style={{ textAlign: "center" }}>
        Ground Floor
      </Typography>

      <div
        style={{
          display: "flex",
          width: "100%",
        }}
      >
        <div>
          <Button
            endIcon={<ExpandLessIcon />}
            variant="outlined"
            className={classes.btn}
            color="primary"
            onClick={onIncrement}
          >
            Up
          </Button>
        </div>

        {liftInFloor === 0 && <Lift />}
      </div>
    </div>
  );
}
