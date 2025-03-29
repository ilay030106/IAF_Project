import React from "react";

function Header({ onUpdate, onAddNew, onSetText, onSetVisual }) {
  return (
    <header>
      <div className="Header">
        <button onClick={onSetText}>Text</button>
        <button onClick={onSetVisual}>Visual</button>
        <button onClick={onAddNew}>+</button>
        <button onClick={onUpdate}>Update Values</button>
      </div>
      <hr />
    </header>
  );
}

export default Header;
