import React from "react";

export default function Ground(props) {
  const { data, liftInFloor, handleLift } = props;

  const onIncrement = () => {
    handleLift(data + 1);
  };

  return (
    <div>
      <div
        style={{
          backgroundColor: "#dadada",
          width: "100%",
          height: "200px",
          padding: "20px 200px",
        }}
      >
        {liftInFloor === 0 && (
          <div style={{ display: "flex", justifyItems: "center" }}>
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
          </div>
        )}

        <div
          style={{
            width: "100%",
            justifyContent: "center",
            display: "flex",
            margin: "0 100px",
          }}
        >
          <button onClick={onIncrement}>Up</button>
        </div>
        <p style={{ textAlign: "center" }}>Ground Floor</p>
      </div>
    </div>
  );
}
