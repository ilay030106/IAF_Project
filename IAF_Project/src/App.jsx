import Header from "./header.jsx";
import Blocks from "./textBlocks.jsx";
import { useState } from "react";
import AddBlockDialog from "./AddBlockDialog";

function App() {
  const [values, setValues] = useState({
    Altitude: 0,
    HIS: 0,
    ADI: 0,
  });

  const [showDialog, setShowDialog] = useState(false); // <== NEW

  const updateValues = () => {
    setValues((prev) => ({
      ...prev,
      Altitude: prev.Altitude + 10,
      HIS: prev.HIS + 5,
      ADI: prev.ADI + 2,
    }));
  };

  const handleAddNew = (newData) => {
    setValues((prev) => ({
      ...prev,
      ...newData,
    }));
    setShowDialog(false);
  };

  return (
    <>
      <Header
        onUpdate={updateValues}
        onAddNew={() => setShowDialog(true)} // <== open dialog
      />
      <Blocks values={values} />
      {showDialog && (
        <AddBlockDialog
          onAdd={handleAddNew}
          onCancel={() => setShowDialog(false)}
        />
      )}
    </>
  );
}

export default App;
