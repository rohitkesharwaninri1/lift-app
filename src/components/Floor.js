import React from "react";

export default function Floor(props) {
  const { data, liftInFloor, handleLift } = props;

  const onIncrement = () => {
    handleLift(data + 1);
  };
  const onDecrement = () => {
    handleLift(data + 1);
  };
  return (
    <div
      style={{
        backgroundColor: "#dadada",
        width: "100%",
        height: "200px",
        padding: "20px 200px",
      }}
    >
      <div style={{ display: "flex", justifyItems: "center" }}>
        <div>
          <button onClick={onIncrement}>Up</button>
          <br />
          <button onClick={onDecrement}>Down</button>
        </div>

        {liftInFloor === data + 1 && (
          <div style={{ display: "flex", margin: "0 100px" }}>
            <div
              style={{
                width: "50px",
                height: "100px",
                backgroundColor: "#ffffff",
                border: "1px solid #000000",
              }}
            ></div>
            <div
              style={{
                width: "50px",
                height: "100px",
                backgroundColor: "#ffffff",
                border: "1px solid #000000",
              }}
            ></div>
          </div>
        )}

        <div style={{ display: "flex", width: "100%", height: "100px" }}>
          <div
            style={{
              margin: "20px",
              width: "100px",
              height: "100px",
              backgroundColor: "#ffffff",
            }}
          ></div>
          <div
            style={{
              margin: "20px",
              width: "100px",
              height: "100px",
              backgroundColor: "#ffffff",
            }}
          ></div>
          <div
            style={{
              margin: "20px",
              width: "100px",
              height: "100px",
              backgroundColor: "#ffffff",
            }}
          ></div>
        </div>
      </div>
      <p style={{ textAlign: "center" }}>F-{data + 1}</p>
    </div>
  );
}
