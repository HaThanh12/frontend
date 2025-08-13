import { documentConverterData as data } from "../datas/data.ts";
import image10 from "../assets/image10.png";
import image11 from "../assets/image11.png";

const Hero = ({ landingPage }: { landingPage: number }) => {
  const fetchedData = landingPage === 1 ? data.hero1 : data.hero2;
  return (
    <div className="bg-[url('/background.png')] bg-cover bg-top-left h-64 sm:h-80 lg:h-[35rem] w-full pt-[2rem] w-full min-h-[95vh]">
      <div className="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-bold text-5xl md:text-6xl mt-8 mb-2">
          {fetchedData.title}
        </h1>

        <div className="w-full sm:max-w-xl md:max-w-2xl flex flex-wrap items-center justify-center">
          <p
            dangerouslySetInnerHTML={{ __html: fetchedData.subtitle }}
            className="text-gray-500 text-base sm:text-lg md:text-xl text-center pb-[1rem]"
          />
        </div>

        <img
          style={{ maxWidth: "100%", height: "auto" }}
          src={landingPage === 1 ? image10 : image11}
          alt={landingPage === 1 ? "image10" : "image11"}
          className="w-3xl lg:w-4xl"
        />
      </div>
    </div>
  );
};

export default Hero;
