const Loader = ({ size }) => {
  return (
    <div>
      <span className={`loading loading-spinner ${size} bg-green-700`}></span>
    </div>
  );
};

export default Loader;
