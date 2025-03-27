function Blocks() {
  const altitude = "Altitude";
  const HIS = "HIS";
  const ADI = "ADI";
  return (
    <>
      <div className="card">
        <h2 id="altitude" className="dataTitle">
          {altitude}
        </h2>
        <h3 id="altitudeVal">PlaceHolder</h3>
      </div>
      <br />
      <div className="card">
        <h2 id="HIS" className="dataTitle">
          {HIS}
        </h2>
        <h3 id="HIS_Val">PlaceHolder</h3>
      </div>
      <br />
      <div className="card">
        <h2 id="ADI" className="dataTitle">
          {ADI}
        </h2>
        <h3 id="ADI_Val">PlaceHolder</h3>
      </div>
      <br />
    </>
  );
}
export default Blocks;
