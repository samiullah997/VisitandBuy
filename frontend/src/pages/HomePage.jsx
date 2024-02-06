import React from 'react'
import Header from "../components/Layout/Header";
import Hero from "../components/Route/Hero/Hero";
import Categories from "../components/Route/Categories/Categories";
import BestDeals from "../components/Route/BestDeals/BestDeals";
import FeaturedProduct from "../components/Route/FeaturedProduct/FeaturedProduct";
import Events from "../components/Events/Events";
import Sponsored from "../components/Route/Sponsored";
import Footer from "../components/Layout/Footer";
import { Helmet } from 'react-helmet';

const HomePage = () => {
  return (
    <div>
        <Helmet>
          <title>Visit And Buy|Home Page</title>
          <meta
            name="description"
            content="VisitandBuy is a one-stop shop for all your shopping needs. We offer a wide range of products from top brands at the best prices."
          />

          <meta
            property="og:title"
            content="VisitandBuy|Home Page"
          />
          <meta
            property="og:image"
            content="../Assests/logo.png"
          />
          <meta
            property="og:url"
            content="https://visitandbuy.shop"
          />
          <meta
            property="og:description"
            content="VisitandBuy is a one-stop shop for all your shopping needs. We offer a wide range of products from top brands at the best prices."
          />
          <meta
            property="og:site_name"
            content="VisitandBuy"
          />
        </Helmet>
        <Header activeHeading={1} />
        <Hero />
        <Categories />
        <BestDeals />
        <Events />
        <FeaturedProduct />
        <Sponsored />
        <Footer />
    </div>
  )
}

export default HomePage