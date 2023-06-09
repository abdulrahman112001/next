("");
import { title } from "process";
import About from "./component/Home/About";
import Blog from "./component/Home/Blog";
import Exhibitions from "./component/Home/Exhibitions";
import { FeaturesSection } from "./component/Home/FeaturesSection";
import HeroSection from "./component/Home/HeroSection";
import Security from "./component/Home/Security";
import Subme from "./component/Home/Subme";
import { Subscribe } from "./component/Home/Subscribe";
import Footer from "./component/template/Footer";

export default function Home() {
  return (
    <>
      <div className="m-auto ">
        <HeroSection />
        <FeaturesSection />
        <Security />
        <About />
        <Subscribe />
        <Subme />
        <Exhibitions />
        <Blog />
        <Footer/>
      </div>
    </>
  );
}
