const Button = ({ bgColor, color, pepe }) => {
  let numA = 10;
  let numB = 143;
  const style = { backgroundColor: bgColor, color: color };

  return <button style={style}>{pepe.toUpperCase()}</button>;
};

export default Button;
