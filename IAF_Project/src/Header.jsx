function Header({ onUpdate, onAddNew }) {
  return (
    <header>
      <div className="Header">
        <button id="text">Text</button>
        <button id="Visual">Visual</button>
        <button id="AddNew" onClick={onAddNew}>
          +
        </button>
        <button onClick={onUpdate}>Update Values</button>
      </div>
      <hr />
    </header>
  );
}

export default Header;
