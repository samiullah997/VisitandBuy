import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Login from "../components/Login/Login.jsx";
import { Helmet } from 'react-helmet';

const LoginPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    if(isAuthenticated === true){
      navigate("/");
    }
  }, [isAuthenticated, navigate])
  
  return (
    <div>
        <Helmet>
          <title>Visit And Buy|Login</title>
          <meta
            name="description"
            content="VisitandBuy is a one-stop shop for all your shopping needs. We offer a wide range of products from top brands at the best prices."
          />

          <meta
            property="og:title"
            content="VisitandBuy|Login"
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
        <Login />
    </div>
  )
}

export default LoginPage;