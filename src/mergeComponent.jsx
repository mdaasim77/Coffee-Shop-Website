import Hero from "./Components/Hero/Hero";
import Services from "./Components/Services/Services";
import WhereToBuy from "./Components/WhereToBuy/WhereToBuy";

const mergeComponent = () => {
  return (
    <>
      <Hero/>
      <Services />
      <WhereToBuy />
      {/* <Banner /> */}
      {/* <Footer /> */}
    </>
  );
};

export default mergeComponent;
