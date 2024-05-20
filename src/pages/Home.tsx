import { ProductList } from "../components/ProductList";
import banner from "../assets/banner.png";
const Home = () => {
  return (
    <div className="w-full">
      <img className="px-24 py-6 max-h-80" src={banner} />
      <ProductList></ProductList>
    </div>
  );
};

export default Home;
