import Header from "./header.jsx";
import Blocks from "./textBlocks.jsx";
import { useState } from "react";
import AddBlockDialog from "./AddBlockDialog";

// קומפוננטת App הראשית שמכילה את כל מבנה האפליקציה
function App() {
  // state עבור ערכי האינסטרומנטים
  const [values, setValues] = useState({
    Altitude: 0,
    HIS: 0,
    ADI: 0,
  });

  // state לקביעת האם להציג את הדיאלוג
  const [showDialog, setShowDialog] = useState(false);

  // פונקציה שמעדכנת ערכים בצורה אוטומטית
  const updateValues = () => {
    setValues((prev) => ({
      ...prev,
      Altitude: prev.Altitude + 10,
      HIS: prev.HIS + 5,
      ADI: prev.ADI + 2,
    }));
  };

  // פונקציה שמקבלת ערכים חדשים מהדיאלוג ומעדכנת את ה-state
  const handleAddNew = (newData) => {
    setValues((prev) => ({
      ...prev,
      ...newData,
    }));
    setShowDialog(false); // סגירת הדיאלוג לאחר ההוספה
  };

  return (
    <>
      {/* קומפוננטת Header עם פעולות של עדכון והוספה */}
      <Header onUpdate={updateValues} onAddNew={() => setShowDialog(true)} />

      {/* הצגת הכרטיסים עם הערכים הנוכחיים */}
      <Blocks values={values} />

      {/* הצגת דיאלוג ההוספה אם נדרש */}
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
