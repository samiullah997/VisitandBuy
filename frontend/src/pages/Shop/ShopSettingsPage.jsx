import React from "react";
import Footer from "../../components/Layout/Footer";
import ShopSettings from "../../components/Shop/ShopSettings";
import DashboardHeader from "../../components/Shop/Layout/DashboardHeader";
import DashboardSideBar from "../../components/Shop/Layout/DashboardSideBar";
import { Helmet } from "react-helmet";

const ShopSettingsPage = () => {
  return (
    <div>
      <Helmet>
        <title>Visit And Buy|Shop Settings</title>
        <meta
          name="description"
          content="VisitandBuy is a one-stop shop for all your shopping needs. We offer a wide range of products from top brands at the best prices."
        />
        <meta property="og:title" content="VisitandBuy|Shop Settings" />
        <meta property="og:image" content="../Assests/logo.png" />
        <meta property="og:url" content="https://visitandbuy.shop" />
        <meta
          property="og:description"
          content="VisitandBuy is a one-stop shop for all your shopping needs. We offer a wide range of products from top brands at the best prices."
        />
        <meta property="og:site_name" content="VisitandBuy" />
      </Helmet>
      <DashboardHeader />
      <div className="flex items-start justify-between w-full">
        <div className="w-[80px] 800px:w-[330px]">
          <DashboardSideBar active={11} />
        </div>
        <ShopSettings />
      </div>
    </div>
  );
};

export default ShopSettingsPage;
