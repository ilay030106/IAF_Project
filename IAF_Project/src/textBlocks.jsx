function Blocks() {
  const altitude = "Altitude";
  const HIS = "HIS";
  const ADI = "ADI";
  return (
    <>
      <div className="card">
        <h2 id="altitude" className="data-title">
          {altitude}
        </h2>
        <h3 id="altitudeVal" className="data-info">
          PlaceHolder
        </h3>
      </div>
      <br />
      <div className="card">
        <h2 id="HIS" className="data-title">
          {HIS}
        </h2>

        <h3 id="HIS_Val" className="data-info">
          PlaceHolder
        </h3>
      </div>
      <br />
      <div className="card">
        <h2 id="ADI" className="data-title">
          {ADI}
        </h2>
        <h3 id="ADI_Val" className="data-info">
          PlaceHolder
        </h3>
      </div>
      <br />
    </>
  );
}
export default Blocks;
