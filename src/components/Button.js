const Button = ({ classNames, text, iconClassName }) => {
  return <button className={classNames.join(" ")}>{text}</button>;
};

Button.defaultProps = {
  classNames: [],
  text: "default",
  iconClassName: null,
};

export default Button;
