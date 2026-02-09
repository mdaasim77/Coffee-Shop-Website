import Hero from "./Components/Hero/Hero";
import Services from "./Components/Services/Services";
import WhereToBuy from "./Components/WhereToBuy/WhereToBuy";
import Banner from "./Components/Banner/Banner"
import Footer from "./Components/Footer/Footer"

const mergeComponent = () => {
  return (
    <div className="w-full overflow-hidden">
      <Hero />
      <Services />
      <WhereToBuy />
     <Banner />
      <Footer />
    </div>
  );
};

export default mergeComponent;
