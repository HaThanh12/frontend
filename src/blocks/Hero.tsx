import { documentConverterData as data } from "../datas/data.ts";
import image10 from "../assets/image10.png";

const Hero = () => {
  return (
    <div className="bg-[url('/background.png')] bg-cover bg-top-left h-64 sm:h-80 lg:h-[35rem] w-full pt-[2rem] w-full min-h-[95vh]">
      <div className="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-bold text-5xl md:text-6xl mt-8 mb-2">
          {data.hero.title}
        </h1>

        <div className="w-full sm:max-w-xl md:max-w-2xl flex flex-wrap items-center justify-center">
          <p
            dangerouslySetInnerHTML={{ __html: data.hero.subtitle }}
            className="text-gray-500 text-base sm:text-lg md:text-xl text-center pb-[1rem]"
          />
        </div>

        <img src={image10} alt="image10" className="w-3xl lg:w-4xl pt-[2rem]" />
      </div>
    </div>
  );
};

export default Hero;
