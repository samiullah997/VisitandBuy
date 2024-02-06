import React from 'react'
import DashboardHeader from '../../components/Shop/Layout/DashboardHeader'
import WithdrawMoney from "../../components/Shop/WithdrawMoney";
import DashboardSideBar from '../../components/Shop/Layout/DashboardSideBar';
import { Helmet } from 'react-helmet';

const ShopWithDrawMoneyPage = () => {
  return (
    <div>
      <Helmet>
        <title>Visit And Buy|Withdraw Money</title>
        <meta
          name="description"
          content="VisitandBuy is a one-stop shop for all your shopping needs. We offer a wide range of products from top brands at the best prices."
        />
        <meta property="og:title" content="VisitandBuy|Withdraw Money" />
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
        <DashboardSideBar active={7} />
      </div>
       <WithdrawMoney />
    </div>
  </div>
  )
}

export default ShopWithDrawMoneyPage