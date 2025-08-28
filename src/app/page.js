import Image from "next/image";
import Banner from "./components/Banner/Banner";
import Products from "./components/Latest/LatestProducts";
import LatestProducts from "./components/Latest/LatestProducts";

export default function Home() {

    
  return (
    <div className="space-y-20">
      <Banner />
      <LatestProducts />
    </div>
  );
}
