import React from "react";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import Lottie from "react-lottie";
import animationData from "../Assests/animations/107043-success.json";
import { Helmet } from "react-helmet";

const OrderSuccessPage = () => {
  return (
    <div>
      <Helmet>
        <title>Visit And Buy|Order Success</title>
        <meta
          name="description"
          content="VisitandBuy is a one-stop shop for all your shopping needs. We offer a wide range of products from top brands at the best prices."
        />
        <meta property="og:title" content="VisitandBuy|Order Success" />
        <meta property="og:image" content="../Assests/logo.png" />
        <meta property="og:url" content="https://visitandbuy.shop" />
        <meta
          property="og:description"
          content="VisitandBuy is a one-stop shop for all your shopping needs. We offer a wide range of products from top brands at the best prices."
        />
        <meta property="og:site_name" content="VisitandBuy" />
      </Helmet>
      <Header />
      <Success />
      <Footer />
    </div>
  );
};

const Success = () => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div>
      <Lottie options={defaultOptions} width={300} height={300} />
      <h5 className="text-center mb-14 text-[25px] text-[#000000a1]">
        Your order is successful 😍
      </h5>
      <br />
      <br />
    </div>
  );
};

export default OrderSuccessPage;
