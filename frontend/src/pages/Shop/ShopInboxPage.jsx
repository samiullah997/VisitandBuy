import React from 'react'
import DashboardHeader from '../../components/Shop/Layout/DashboardHeader'
import DashboardSideBar from '../../components/Shop/Layout/DashboardSideBar'
import DashboardMessages from "../../components/Shop/DashboardMessages";
import { Helmet } from 'react-helmet';

const ShopInboxPage = () => {
  return (
    <div>
      <Helmet>
        <title>Visit And Buy|Inbox</title>
        <meta
          name="description"
          content="VisitandBuy is a one-stop shop for all your shopping needs. We offer a wide range of products from top brands at the best prices."
        />
        <meta property="og:title" content="VisitandBuy|Inbox" />
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
        <DashboardSideBar active={8} />
      </div>
       <DashboardMessages />
    </div>
  </div>
  )
}

export default ShopInboxPage