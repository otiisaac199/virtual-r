export const ClearButton = ({ text }) => {
  return (
    <a href="#" className="py-2 px-3 border rounded-md">
      {text}
    </a>
  );
};

export const GradientButton = ({ text }) => {
  return (
    <a
      href="#"
      className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md"
    >
      {text}
    </a>
  );
};

// export default Button;
