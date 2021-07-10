import PropTypes from "prop-types";

const Button = ({ classNames, text, iconClassName, onClick }) => {
  return (
    <button className={classNames.join(" ")} onClick={onClick}>
      {text}
      {iconClassName && <i className={iconClassName}></i>}
    </button>
  );
};

Button.defaultProps = {
  classNames: [],
  text: "default",
  iconClassName: null,
};

Button.propTypes = {
  classNames: PropTypes.array,
  text: PropTypes.string,
  iconClassName: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
