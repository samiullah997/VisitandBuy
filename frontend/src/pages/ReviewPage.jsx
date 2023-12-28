import React from "react";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";

const ReviewPage = () => {
  return (
    <>
      <Header activeHeading={1} />
      <div className="review-container p-8">
        <h2 className="text-3xl font-bold mb-4">Customer Reviews</h2>
        <p className="text-gray-700 mb-6">
          Discover what our valued customers are saying about their experiences
          with <span className="text-blue-500">HaramSales</span>. We take pride
          in providing excellent products and services, and our customers'
          feedback reflects their satisfaction.
        </p>

        <div className="review-card mb-6">
          <h3 className="text-2xl font-bold mb-2">Exceptional Quality</h3>
          <p className="text-gray-700 mb-4">
            I have been a loyal customer of{" "}
            <span className="text-blue-500">HaramSales</span> for years. The
            quality of their products is exceptional, and the attention to
            detail is unmatched. I always recommend them to friends and family.
          </p>
          <p className="text-gray-500">- Samiullah., Verified Buyer</p>
        </div>

        <div className="review-card mb-6">
          <h3 className="text-2xl font-bold mb-2">
            Outstanding Customer Service
          </h3>
          <p className="text-gray-700 mb-4">
            The customer service at{" "}
            <span className="text-blue-500">HaramSales</span> is truly
            outstanding. They go above and beyond to ensure customer
            satisfaction. Any issue I've had was resolved promptly and
            courteously.
          </p>
          <p className="text-gray-500">
            - Muhammad Hamza Khan., Repeat Customer
          </p>
        </div>

        <div className="review-card mb-6">
          <h3 className="text-2xl font-bold mb-2">Reliable and Trustworthy</h3>
          <p className="text-gray-700 mb-4">
            I can always trust <span className="text-blue-500">HaramSales</span>{" "}
            for reliable products and a secure shopping experience. Their
            commitment to quality and security sets them apart from other online
            retailers.
          </p>
          <p className="text-gray-500">- Reshid Menhas., Satisfied Shopper</p>
        </div>

        <div className="review-card">
          <h3 className="text-2xl font-bold mb-2">Prompt Delivery</h3>
          <p className="text-gray-700 mb-4">
            I appreciate the prompt delivery of orders.{" "}
            <span className="text-blue-500">HaramSales</span> ensures that I
            receive my products on time, and the packaging is always secure.
            It's a pleasure to shop with them.
          </p>
          <p className="text-gray-500">- Jawad Khan., Happy Customer</p>
        </div>

        <p className="text-gray-700 mt-6">
          We value each review and use them to continually improve our products
          and services. Thank you for choosing{" "}
          <span className="text-blue-500">HaramSales</span> for your shopping
          needs!
        </p>
      </div>
      <Footer />
    </>
  );
};

export default ReviewPage;
