import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ShopLogin from "../components/Shop/ShopLogin";
import { Helmet } from 'react-helmet';

const ShopLoginPage = () => {
  const navigate = useNavigate();
  const { isSeller,isLoading } = useSelector((state) => state.seller);

  useEffect(() => {
    if(isSeller === true){
      navigate(`/dashboard`);
    }
  }, [isLoading,isSeller, navigate])
  return (
    <div>
        <Helmet>
          <title>Visit And Buy|Shop Login</title>
          <meta
            name="description"
            content="VisitandBuy is a one-stop shop for all your shopping needs. We offer a wide range of products from top brands at the best prices."
          />
          <meta property="og:title" content="VisitandBuy|Shop Login" />
          <meta property="og:image" content="../Assests/logo.png" />
          <meta property="og:url" content="https://visitandbuy.shop" />
          <meta
            property="og:description"
            content="VisitandBuy is a one-stop shop for all your shopping needs. We offer a wide range of products from top brands at the best prices."
          />
          <meta property="og:site_name" content="VisitandBuy" />
        </Helmet>
        <ShopLogin />
    </div>
  )
}

export default ShopLoginPage