function Blocks() {
  const instruments = [
    { label: "Altitude", id: "altitude" },
    { label: "HIS", id: "HIS" },
    { label: "ADI", id: "ADI" },
  ];

  return (
    <div className="cards-container">
      {instruments.map((inst) => (
        <div key={inst.id} className="card">
          <h2 id={inst.id} className="data-title">
            {inst.label}
          </h2>
          <h3 id={`${inst.id}_Val`} className="data-info">
            PlaceHolder
          </h3>
        </div>
      ))}
    </div>
  );
}

export default Blocks;
