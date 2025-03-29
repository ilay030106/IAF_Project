import React, { useState } from "react";

// Component for showing a dialog to input flight data
function AddBlockDialog({ onAdd, onCancel }) {
  // Separate state for each field
  const [altitude, setAltitude] = useState("");
  const [his, setHis] = useState("");
  const [adi, setAdi] = useState("");

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form refresh

    const newData = {};
    // Only include a field if the user entered a value
    if (altitude !== "") newData.Altitude = parseInt(altitude);
    if (his !== "") newData.HIS = parseInt(his);
    if (adi !== "") newData.ADI = parseInt(adi);
    try {
      const res = await fetch("http://localhost:5000/api/flight", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ altitude, his, adi }),
      });
    } catch (err) {
      alert("Failed to send data");
    }

    onAdd(newData); // Pass data up to parent

    // Reset fields after submission
    setAltitude("");
    setHis("");
    setAdi("");
  };

  return (
    <div style={overlayStyle}>
      <div style={dialogStyle}>
        <h3>Add Your Flight Data</h3>
        <form onSubmit={handleSubmit}>
          {/* Altitude field */}
          <label htmlFor="altitude">Altitude</label>
          <input
            id="altitude"
            type="number"
            min="0"
            max="3000"
            value={altitude}
            onChange={(e) => setAltitude(e.target.value)}
            style={inputStyle}
          />

          {/* HIS field */}
          <label htmlFor="his">HIS</label>
          <input
            id="his"
            type="number"
            min="0"
            max="360"
            value={his}
            onChange={(e) => setHis(e.target.value)}
            style={inputStyle}
          />

          {/* ADI field */}
          <label htmlFor="adi">ADI</label>
          <input
            id="adi"
            type="number"
            min="-100"
            max="100"
            value={adi}
            onChange={(e) => setAdi(e.target.value)}
            style={inputStyle}
          />

          {/* Buttons for submit and cancel */}
          <div style={{ marginTop: "1em" }}>
            <button type="submit">Add</button>
            <button
              type="button"
              onClick={onCancel}
              style={{ marginLeft: "0.5em" }}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// Styling for the dialog overlay and container
const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0,0,0,0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

const dialogStyle = {
  backgroundColor: "#fff",
  padding: "2em",
  borderRadius: "12px",
  width: "300px",
  textAlign: "center",
};

const inputStyle = {
  width: "100%",
  padding: "0.5em",
  marginBottom: "1em",
  fontSize: "1em",
};

export default AddBlockDialog;
