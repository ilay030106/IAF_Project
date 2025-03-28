import React from "react";

function VisualBlocks({ values }) {
  // Calculate visual representation values
  const altHeight = Math.min(100, (values.Altitude / 3000) * 100);
  const rotation = values.HIS % 360;
  const adiColor =
    values.ADI > 50 ? "green" : values.ADI < -50 ? "red" : "gray";

  return (
    <div
      style={{
        display: "flex",
        gap: "2rem",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
      }}
    >
      {/* Altitude bar */}
      <div
        style={{
          height: 300,
          width: 40,
          backgroundColor: "#ccc",
          position: "relative",
          borderRadius: 8,
        }}
      >
        <div
          style={{
            height: `${altHeight}%`,
            backgroundColor: "black",
            width: "100%",
            position: "absolute",
            bottom: 0,
            borderRadius: 8,
          }}
        />
      </div>

      {/* HIS compass */}
      <div
        style={{
          width: 320,
          height: 320,
          borderRadius: "50%",
          border: "2px solid black",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 2,
            height: 145,
            backgroundColor: "red",
            top: 10,
            left: "50%",
            transform: `translateX(-50%) rotate(${rotation}deg)`,
            transformOrigin: "bottom center",
          }}
        />
        {/* Fixed labels */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          0
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          180
        </div>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: 0,
            transform: "translateY(-50%)",
          }}
        >
          270
        </div>
        <div
          style={{
            position: "absolute",
            top: "50%",
            right: 0,
            transform: "translateY(-50%)",
          }}
        >
          90
        </div>
      </div>

      {/* ADI status indicator */}
      <div
        style={{
          width: 100,
          height: 100,
          borderRadius: "50%",
          backgroundColor: adiColor,
          border: "2px solid black",
        }}
      />
    </div>
  );
}

export default VisualBlocks;
