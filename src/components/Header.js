import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    padding: "10px",
    backgroundColor: "#ffffff",
    borderRadius: "0 0 10px 10px",
    left: "50%",
    transform: "translate(-50%,0)",
    top: 0,
  },
}));

export default function Header(props) {
  const { getInput } = props;
  const classes = useStyles();
  return (
    <Box boxShadow={3} className={classes.root}>
      <form onSubmit={getInput}>
        <TextField
          label="Add floor"
          type="number"
          name="floor"
          variant="filled"
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          style={{ margin: "10px" }}
        >
          Add floor
        </Button>
      </form>
    </Box>
  );
}
