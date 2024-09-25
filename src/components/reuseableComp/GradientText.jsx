const GradientText = ({ text }) => {
  return (
    <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
      {text}
    </span>
  );
};

export default GradientText;
