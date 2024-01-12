import React from "react";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";

const ContactUsPage = () => {
  return (
    <>
      <Header activeHeading={1} />
      <div className="contact-us-container p-8">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="text-gray-700 mb-6">
          We are here to assist you. If you have any questions, concerns, or
          feedback, please don't hesitate to reach out to us. Our dedicated team
          at <span className="text-blue-500">Visit and Buy</span> is ready to
          provide the support you need.
        </p>

        <div className="contact-info mb-6">
          <h3 className="text-2xl font-bold mb-2">Customer Support</h3>
          <p className="text-gray-700 mb-2">
            For assistance with orders, products, or general inquiries:
          </p>
          <p className="text-blue-500">Email: support@harmsales.com</p>
        </div>

        <div className="contact-info mb-6">
          <h3 className="text-2xl font-bold mb-2">Business Inquiries</h3>
          <p className="text-gray-700 mb-2">
            For partnership opportunities or business-related inquiries:
          </p>
          <p className="text-blue-500">Email: business@harmsales.com</p>
        </div>

        <div className="contact-info mb-6">
          <h3 className="text-2xl font-bold mb-2">Media and Press</h3>
          <p className="text-gray-700 mb-2">
            For media inquiries or press-related matters:
          </p>
          <p className="text-blue-500">Email: media@harmsales.com</p>
        </div>

        <div className="contact-info mb-6">
          <h3 className="text-2xl font-bold mb-2">Visit Us</h3>
          <p className="text-gray-700 mb-2">Our office is located at:</p>
          <p className="text-gray-500">FF-404 Deans Plaza Peshawar</p>
        </div>

        <div className="contact-info">
          <h3 className="text-2xl font-bold mb-2">Social Media</h3>
          <p className="text-gray-700 mb-2">
            Connect with us on social media for the latest updates:
          </p>
          <p className="text-blue-500">Facebook | Twitter | Instagram</p>
        </div>

        <p className="text-gray-700 mt-6">
          We appreciate your feedback and look forward to serving you. Thank you
          for choosing <span className="text-blue-500">Visit and Buy</span>!
        </p>
      </div>
      <Footer />
    </>
  );
};

export default ContactUsPage;
