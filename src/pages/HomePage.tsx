import Caption1 from "../blocks/Caption1";
import Caption2 from "../blocks/Caption2";
import Caption3 from "../blocks/Caption3";
import Header from "../blocks/Header";
import Hero from "../blocks/Hero";
import DynamicItems from "../footer/dynamicItems";
import Logos from "../footer/logos";
import Footer from "../footer/footer";

const HomePage = () => {
  return (
    <>
      <Header />
      <Hero landingPage={1} />
      <Caption1 />
      <Caption2 />
      <Caption3 />
      <div className="main-container">
        <DynamicItems />
        <Logos />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
