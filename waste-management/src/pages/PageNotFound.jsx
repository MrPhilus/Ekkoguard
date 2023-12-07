import pageNotFound from "../assets/images/notfound.png";
import CustomButton from "../components/CustomButton";
import styles from "../components/card";

const PageNotFound = ({ disabled, onClick, buttonLink, buttonText }) => {
  return (
    <div className="w-screen h-screen border flex flex-col items-center justify-center">
      <img src={pageNotFound} alt="" />
      <h1 className="my-4 text-4xl font-bold text-green-600">PAGE NOT FOUND</h1>
      <CustomButton
        disabled={disabled}
        onClick={onClick}
        containerStyle={"btn btn-wide text-white bg-green-600 "}
        buttonLink={"/"}
        buttonText={"Back Home"}
      />
    </div>
  );
};

export default PageNotFound;
