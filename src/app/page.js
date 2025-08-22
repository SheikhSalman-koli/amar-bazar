import Image from "next/image";
import Banner from "./components/Banner/Banner";
import Products from "./products/Products";

export default function Home() {
  return (
    <div className="space-y-20">
      <Banner />
      <Products />

    </div>
  );
}
