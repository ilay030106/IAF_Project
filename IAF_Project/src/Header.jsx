function Header({ onUpdate, onAddNew }) {
  return (
    <header>
      <div className="Header">
        {/* כפתור מצב טקסט (כרגע ללא פעולה) */}
        <button id="text">Text</button>

        {/* כפתור מצב תצוגה ויזואלית (כרגע ללא פעולה) */}
        <button id="Visual">Visual</button>

        {/* כפתור לפתיחת דיאלוג הוספת ערכים */}
        <button id="AddNew" onClick={onAddNew}>
          +
        </button>

        {/* כפתור לעדכון הערכים באופן אוטומטי */}
        <button onClick={onUpdate}>Update Values</button>
      </div>
      <hr />
    </header>
  );
}

export default Header;
