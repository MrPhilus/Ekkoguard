import pageNotFound from "../assets/images/underconstruction.png";
import CustomButton from "../components/CustomButton";
import styles from "../components/card";

const PageNotFound = ({ disabled, onClick, buttonLink, buttonText }) => {
  return (
    <div className="w-screen h-screen border flex flex-col items-center justify-center">
      <img src={pageNotFound} alt="" />
      <CustomButton
        disabled={disabled}
        onClick={onClick}
        containerStyle={'btn btn-wide text-white bg-green-600 '}
        buttonLink={'/'}
        buttonText={'Back Home'}
      />
    </div>
  );
};

export default PageNotFound;
