import { Routes, Route, Navigate } from "react-router-dom";

import Caption1 from "./blocks/Caption1";
import Caption2 from "./blocks/Caption2";
import Caption3 from "./blocks/Caption3";
import Header from "./blocks/Header";
import Hero from "./blocks/Hero";
import DynamicItems from "./footer/dynamicItems";
import Logos from "./footer/logos";
import Footer from "./footer/footer";
import Caption4 from "./blocks/Caption4";

export default function App() {
  return (
    <>
    <Routes>
      {/* Redirect "/" sang "/home" */}
      <Route path="/" element={<Navigate to="/home" replace />} />
      {/* Trang Home */}
      <Route
        path="/home"
        element={
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
        }
      />
    </Routes>

    <Routes>
      {/* Redirect "/" sang "/home" */}
      <Route path="/" element={<Navigate to="/templates" replace />} />
      {/* Trang Home */}
      <Route
        path="/templates"
        element={
          <>
            <Header />
            <Hero landingPage={2} />
            <Caption4 />
            <Caption2 />
            <Caption3 />

            <div className="main-container">
              <DynamicItems />
              <Logos />
              <Footer />
            </div>
          </>
        }
      />
    </Routes>
    </>
  );
}
