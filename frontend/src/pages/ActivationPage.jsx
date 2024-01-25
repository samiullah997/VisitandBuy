import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { frontend_url, server } from "../server";

const ActivationPage = () => {
  const { activation_token } = useParams();
  const [error, setError] = useState(false);

  useEffect(() => {
    if (activation_token) {
      const sendRequest = async () => {
        await axios
          .post(`${server}/user/activation`, {
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
          <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
              <h1 className="text-2xl font-bold mb-6 text-gray-800">
                Welcome, User!
              </h1>
              <p className="text-gray-600 mb-4">
                Thank you for joining our platform as a user. We're excited to
                have you on board!
              </p>
              <p className="text-gray-600 mb-4">
                Get ready to shop from a wide variety of products and enjoy your
                shopping experience with us.
              </p>
              <p className="text-gray-600 mb-6">
                If you have any questions or need assistance, our support team
                is here to help.
              </p>
              <p className="text-gray-600 mb-6">
                <strong>Happy Shopping!</strong>
              </p>
              <p className="text-gray-600 mb-6">
                <strong>Team Visit and Buy</strong>
              </p>
              <hr className="mb-6" />
              <Link
                to={`${frontend_url}/login`}
                className="text-blue-500 hover:underline"
              >
                <button className="bg-blue-500 text-white rounded py-2 px-4 hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue">
                  Go to Login Page
                </button>
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ActivationPage;
