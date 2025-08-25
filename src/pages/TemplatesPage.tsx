import Header from "../blocks/Header";
import Hero from "../blocks/Hero";
import DynamicItems from "../footer/dynamicItems";
import Logos from "../footer/logos";
import Footer from "../footer/footer";
import Pagination from "../blocks/Pagination";

const TemplatesPage = () => {
  return (
    <>
      <Header />
      <Hero landingPage={2} />
      <Pagination perPage={8} categoryNumber={1} />
      <Pagination perPage={3} categoryNumber={2} />

      <div className="main-container">
        <DynamicItems />
        <Logos />
        <Footer />
      </div>
    </>
  );
};

export default TemplatesPage;
