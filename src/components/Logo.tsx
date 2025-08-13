import icon from "../assets/icon.png";
import textlogo from "../assets/textlogo.png";

const Logo = () => {
  return (
    <div className="flex flex-row items-center">
      <img src={icon} alt="comp-platform-logo" className="w-[2rem]" />
      <img src={textlogo} alt="comp-platform-logo" className="h-[1rem] px-1" />
    </div>
  );
};

export default Logo;
