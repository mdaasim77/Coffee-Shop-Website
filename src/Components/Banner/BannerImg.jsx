import Banner from "../../images/coffee-cover.jpg";
import Heading from "./BannnerText/Heading";

export default function BannerImg() {
  const BannerImg = {
    backgroundImage: `url(${Banner})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "700px",
    width: "100%",
  };
  return (
    <div>
      <div className="flex items-end md:justify-end md:items-center mx-auto" style={BannerImg}>
        {/* heading text  */}
        <Heading />
      </div>
    </div>
  );
}
