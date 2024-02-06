import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { frontend_url, server } from "../server";
import { Helmet } from "react-helmet";

const SellerActivationPage = () => {
  const { activation_token } = useParams();
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (activation_token) {
      const sendRequest = async () => {
        await axios
          .post(`${server}/shop/activation`, {
            activation_token,
          })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            setError(true);
          });
      };
      sendRequest();
    }
  }, [activation_token]);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {error ? (
        <p>Your token is expired!</p>
      ) : (
        <>
          <Helmet>
            <title>Visit And Buy|Seller Activation</title>
            <meta
              name="description"
              content="Thank you for joining our platform as a seller. We're excited to have you on board! Get ready to showcase your products to a wide audience and grow your business with us."
            />
            
            <meta property="og:title" content="VisitandBuy|Seller Activation" />
            <meta property="og:image" content="../Assests/logo.png" />
            <meta property="og:url" content="https://visitandbuy.shop" />
            <meta
              property="og:description"
              content="Thank you for joining our platform as a seller. We're excited to have you on board! Get ready to showcase your products to a wide audience and grow your business with us."
            />
            <meta property="og:site_name" content="VisitandBuy" />
          </Helmet>
          <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
              <h1 className="text-2xl font-bold mb-6 text-gray-800">
                Welcome, Seller!
              </h1>
              <p className="text-gray-600 mb-4">
                Thank you for joining our platform as a seller. We're excited to
                have you on board!
              </p>
              <p className="text-gray-600 mb-4">
                Get ready to showcase your products to a wide audience and grow
                your business with us.
              </p>
              <p className="text-gray-600 mb-6">
                If you have any questions or need assistance, our support team
                is here to help.
              </p>
              <p className="text-gray-600 mb-6">
                <strong>Happy selling!</strong>
              </p>
              <p className="text-gray-600 mb-6">
                <strong>Team Visit and Buy</strong>
              </p>
              <hr className="mb-6" />
              <Link
                to={`${frontend_url}/shop-login`}
                className="text-blue-500 hover:underline"
              >
                <button className="bg-blue-500 text-white rounded py-2 px-4 hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue">
                  Go to Seller Dashboard
                </button>
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SellerActivationPage;
