import React from 'react'
import DashboardHeader from '../../components/Shop/Layout/DashboardHeader'
import DashboardSideBar from '../../components/Shop/Layout/DashboardSideBar'
import AllOrders from "../../components/Shop/AllOrders";
import { Helmet } from 'react-helmet';

const ShopAllOrders = () => {
  return (
        <div>
            <Helmet>
              <title>Visit And Buy|All Orders</title>
              <meta
                name="description"
                content="VisitandBuy is a one-stop shop for all your shopping needs. We offer a wide range of products from top brands at the best prices."
              />
              <meta property="og:title" content="VisitandBuy|All Orders" />
              <meta property="og:image" content="../Assests/logo.png" />
              <meta property="og:url" content="https://visitandbuy.shop" />
              <meta
                property="og:description"
                content="VisitandBuy is a one-stop shop for all your shopping needs. We offer a wide range of products from top brands at the best prices."
              />
              <meta property="og:site_name" content="VisitandBuy" />
            </Helmet>
            <DashboardHeader />
            <div className="flex justify-between w-full">
                <div className="w-[80px] 800px:w-[330px]">
                  <DashboardSideBar active={2} />
                </div>
                <div className="w-full justify-center flex">
                   <AllOrders />
                </div>
              </div>
        </div>
  )
}

export default ShopAllOrders