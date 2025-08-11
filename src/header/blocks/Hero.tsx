import { documentConverterData as data } from "../data/data.ts";
import image10 from "../assets/image10.png";

const Hero = () => {
  return (
    <div className="bg-[url('/background.png')] lg:bg-contain md:bg-cover bg-center w-full min-h-screen">
      <div className="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-bold text-5xl md:text-6xl mt-8 mb-2">
          {data.hero.title}
        </h1>

        <div className="w-full sm:max-w-xl md:max-w-xl flex flex-wrap items-center justify-center">
          <p
            dangerouslySetInnerHTML={{ __html: data.hero.subtitle }}
            className="text-gray-500 text-base sm:text-lg md:text-xl text-center"
          />
        </div>

        <img
          src={image10}
          alt="image10"
          className="w-full sm:w-3/4 md:w-2/3 lg:w-1/3 py-6 h-auto"
        />
      </div>
    </div>
  );
};

export default Hero;
