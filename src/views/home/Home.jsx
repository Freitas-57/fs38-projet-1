import MainBanner from "../../components/main-banner/MainBanner";
import style from "./Home.module.css";
import ProductDestack from "./product-destac/ProductDestack"

function Home() {
  return (
    <>
      <MainBanner />
      <div className={style.content}>
        <ProductDestack/> 
      </div>
    </>
  );
}

export default Home;
