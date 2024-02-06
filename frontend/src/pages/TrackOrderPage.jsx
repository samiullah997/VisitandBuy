import React from 'react'
import Header from '../components/Layout/Header'
import Footer from '../components/Layout/Footer'
import TrackOrder from "../components/Profile/TrackOrder";
import { Helmet } from 'react-helmet';

const TrackOrderPage = () => {
  return (
    <div>
        <Helmet>
          <title>Visit And Buy|Track Order</title>
          <meta
            name="description"
            content="VisitandBuy is a one-stop shop for all your shopping needs. We offer a wide range of products from top brands at the best prices."
          />
          <meta property="og:title" content="VisitandBuy|Track Order" />
          <meta property="og:image" content="../Assests/logo.png" />
          <meta property="og:url" content="https://visitandbuy.shop" />
          <meta
            property="og:description"
            content="VisitandBuy is a one-stop shop for all your shopping needs. We offer a wide range of products from top brands at the best prices."
          />
          <meta property="og:site_name" content="VisitandBuy" />
        </Helmet>
        <Header />
        <TrackOrder />
        <Footer />
    </div>
  )
}

export default TrackOrderPage