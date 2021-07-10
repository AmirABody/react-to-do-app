// import PropTypes from 'prop-types'
import Button from "./Button";

const Header = ({ onAdd, showAdd }) => {

  return (
    <header className="header mb-1">
      <h3 className="main-title">My To Do List</h3>
      <Button
        classNames={["custom-btn", showAdd ? 'close-btn' : 'add-btn']}
        text={showAdd ? 'Close' : 'Add Task'}
        iconClassName={showAdd ? 'bi-x-circle' : 'bi-plus-circle'}
        onClick={onAdd}
      />
      {/* <Button
        classNames={["custom-btn", "close-btn"]}
        text="Close"
        iconClassName="bi-x-circle"
        onClick={onAdd}
      /> */}
    </header>
  );
};

export default Header;
