import Header from "./header.jsx";
import Blocks from "./textBlocks.jsx";
import React, { useState } from "react";
import AddBlockDialog from "./AddBlockDialog";

function App() {
  // State for instrument values
  const [values, setValues] = useState({
    Altitude: 0,
    HIS: 0,
    ADI: 0,
  });

  // State for showing the add new dialog
  const [showDialog, setShowDialog] = useState(false);

  // State for switching between visual and text representation
  const [isVisual, setIsVisual] = useState(false);

  // Function to update instrument values automatically
  const updateValues = () => {
    setValues((prev) => ({
      ...prev,
      Altitude: prev.Altitude + 10,
      HIS: prev.HIS + 5,
      ADI: prev.ADI + 2,
    }));
  };

  // Function to handle new values from the dialog
  const handleAddNew = (newData) => {
    setValues((prev) => ({
      ...prev,
      ...newData,
    }));
    setShowDialog(false);
  };

  return (
    <div>
      <Header
        onUpdate={updateValues}
        onAddNew={() => setShowDialog(true)}
        onSetVisual={() => setIsVisual(true)}
        onSetText={() => setIsVisual(false)}
      />
      <Blocks values={values} isVisual={isVisual} />
      {showDialog && (
        <AddBlockDialog
          onAdd={handleAddNew}
          onCancel={() => setShowDialog(false)}
        />
      )}
    </div>
  );
}

export default App;
