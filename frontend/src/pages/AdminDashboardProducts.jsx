import React from 'react'
import AdminHeader from '../components/Layout/AdminHeader'
import AdminSideBar from '../components/Admin/Layout/AdminSideBar'
import AllProducts from "../components/Admin/AllProducts";
import { Helmet } from 'react-helmet';

const AdminDashboardProducts = () => {
  return (
    <div>
      <Helmet>
      <title>Visit And Buy|Admin Dashboard Products</title>
      <meta
        name="description"
        content="VisitandBuy is a one-stop shop for all your shopping needs. We offer a wide range of products from top brands at the best prices."
      />
      <meta property="og:title" content="VisitandBuy|Admin Dashboard Products" />
      <meta property="og:image" content="../Assests/logo.png" />
      <meta property="og:url" content="https://visitandbuy.shop" />
      <meta
        property="og:description"
        content="VisitandBuy is a one-stop shop for all your shopping needs. We offer a wide range of products from top brands at the best prices."
      />
      <meta property="og:site_name" content="VisitandBuy" />
      </Helmet>
    <AdminHeader />
    <div className="w-full flex">
      <div className="flex items-start justify-between w-full">
        <div className="w-[80px] 800px:w-[330px]">
          <AdminSideBar active={5} />
        </div>
        <AllProducts />
      </div>
    </div>
  </div>
  )
}

export default AdminDashboardProducts