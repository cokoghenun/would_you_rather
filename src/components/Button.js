
const Button = ({onClick, text}) => {
  return <div><button className='button' onClick={onClick}>{text}</button></div>;
};

export default Button;
