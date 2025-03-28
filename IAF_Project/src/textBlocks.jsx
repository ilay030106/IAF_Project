function Blocks({ values }) {
  // רשימת האינסטרומנטים להצגה
  const instruments = [
    { label: "Altitude", id: "Altitude" },
    { label: "HIS", id: "HIS" },
    { label: "ADI", id: "ADI" },
  ];

  return (
    <div className="cards-container">
      {/* עבור כל אינסטרומנט ניצור כרטיס */}
      {instruments.map((inst) => (
        <div key={inst.id} className="card">
          <h2 id={inst.id} className="data-title">
            {inst.label} {/* הצגת שם האינסטרומנט */}
          </h2>
          <h3 id={`${inst.id}_Val`} className="data-info">
            {/* הצגת הערך מתוך values, או N/A אם לא קיים */}
            {values[inst.id] !== undefined ? values[inst.id] : "N/A"}
          </h3>
        </div>
      ))}
    </div>
  );
}
