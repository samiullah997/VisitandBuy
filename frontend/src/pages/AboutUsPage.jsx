import React from "react";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";

const AboutUsPage = () => {
  return (
    <>
      <Header activeHeading={1} />
      <div className="about-us-container p-8">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="text-gray-700 mb-6">
          Welcome to <span className="text-blue-500">Visit and Buy</span>, where
          your shopping experience meets excellence. We are a passionate team
          dedicated to bringing you the best products with a seamless and
          enjoyable online shopping journey.
        </p>

        <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
        <p className="text-gray-700 mb-6">
          At <span className="text-blue-500">Visit and Buy</span>, our mission is
          to provide you with a curated selection of high-quality products that
          enhance your lifestyle. We strive to create an online platform that
          not only offers convenience but also fosters trust and satisfaction
          among our customers.
        </p>

        <h3 className="text-2xl font-bold mb-2">Quality Assurance</h3>
        <p className="text-gray-700 mb-6">
          We understand the importance of quality in your purchases. That's why
          we collaborate with trusted suppliers and manufacturers to ensure that
          every product in our inventory meets stringent quality standards. Rest
          assured, when you shop with us, you are investing in excellence.
        </p>

        <h3 className="text-2xl font-bold mb-2">Customer Satisfaction</h3>
        <p className="text-gray-700 mb-6">
          Your satisfaction is our top priority. Our dedicated customer support
          team is always ready to assist you with any queries or concerns. We
          value your feedback and continuously strive to improve our services to
          meet and exceed your expectations.
        </p>

        <h3 className="text-2xl font-bold mb-2">Secure Shopping</h3>
        <p className="text-gray-700 mb-6">
          Security is paramount in online shopping. We employ the latest
          encryption technologies to safeguard your personal and financial
          information. You can shop with confidence, knowing that your data is
          protected throughout your entire shopping experience.
        </p>

        <h3 className="text-2xl font-bold mb-2">
          Community and Social Responsibility
        </h3>
        <p className="text-gray-700 mb-6">
          Being a responsible business, we actively participate in initiatives
          that contribute to the well-being of our community and the
          environment. We believe in giving back and making a positive impact on
          the world.
        </p>

        <h3 className="text-2xl font-bold mb-2">Stay Connected</h3>
        <p className="text-gray-700 mb-6">
          Join our community and stay updated on the latest products,
          promotions, and news. Follow us on social media and subscribe to our
          newsletter for exclusive offers and exciting updates.
        </p>

        <p className="text-gray-700">
          Thank you for choosing{" "}
          <span className="text-blue-500">Visit and Buy</span>. We look forward to
          serving you and providing an exceptional online shopping experience.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default AboutUsPage;
