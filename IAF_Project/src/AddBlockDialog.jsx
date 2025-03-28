import { useState } from "react";

// קומפוננט להצגת דיאלוג להזנת נתוני טיסה
function AddBlockDialog({ onAdd, onCancel }) {
  // יצירת state נפרד לכל אחד מהשדות
  const [altitude, setAltitude] = useState("");
  const [his, setHis] = useState("");
  const [adi, setAdi] = useState("");

  // פונקציית שליחה של הטופס
  const handleSubmit = (e) => {
    e.preventDefault(); // ביטול רענון דף ברירת מחדל של הטופס

    const newData = {};
    // רק אם המשתמש הזין ערך – נכניס אותו לאובייקט
    if (altitude !== "") newData.Altitude = parseInt(altitude);
    if (his !== "") newData.HIS = parseInt(his);
    if (adi !== "") newData.ADI = parseInt(adi);

    onAdd(newData); // שליחת הנתונים למעלה לקומפוננטת האב

    // איפוס השדות אחרי שליחה
    setAltitude("");
    setHis("");
    setAdi("");
  };

  return (
    <div style={overlayStyle}>
      <div style={dialogStyle}>
        <h3>Add Your Flight Data</h3>
        <form onSubmit={handleSubmit}>
          {/* שדה להזנת Altitude */}
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

          {/* שדה להזנת HIS */}
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

          {/* שדה להזנת ADI */}
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

          {/* כפתורים לשליחה וביטול */}
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

// עיצוב שכבת הרקע של הדיאלוג
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

// עיצוב תיבת הדיאלוג עצמה
const dialogStyle = {
  backgroundColor: "#fff",
  padding: "2em",
  borderRadius: "12px",
  width: "300px",
  textAlign: "center",
};

// עיצוב של שדות הקלט בטופס
const inputStyle = {
  width: "100%",
  padding: "0.5em",
  marginBottom: "1em",
  fontSize: "1em",
};

export default AddBlockDialog;
