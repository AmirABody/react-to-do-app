// import PropTypes from 'prop-types'
import Button from "./Button";

const Header = () => {
  return (
    <header className="header mb-1">
      <h3 className="main-title">My To Do List</h3>
      <Button
        classNames={["custom-btn", "add-btn"]}
        text="Add Task"
        iconClassName="bi-plus-circle"
      />
    </header>
  );
};

export default Header;
