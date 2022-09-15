const Button = ({ children, btnClass, passFunction }) => {
  const preventDefaultHandler = (e) => {
    e.preventDefault();
  };
  const buttonHandler = (e) => {
    preventDefaultHandler(e);
    if (passFunction !== undefined) passFunction();
  };

  const btnClasses = `py-2 px-4 rounded-md  font-semibold uppercase tracking-wide  transition-colors duration-200 ${btnClass}`;

  return (
    <button onClick={buttonHandler} className={btnClasses}>
      {children}
    </button>
  );
};

export default Button;
