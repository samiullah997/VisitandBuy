import React from "react";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";

const CareerPage = () => {
  return (
    <>
      <Header activeHeading={1} />
      <div className="career-container p-8">
        <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
        <p className="text-gray-700 mb-6">
          At <span className="text-blue-500">Visit and Buy</span>, we are always on
          the lookout for talented individuals to join our dynamic team. If you
          are passionate about making a difference and thrive in a collaborative
          environment, we'd love to hear from you.
        </p>

        <h3 className="text-2xl font-bold mb-2">Current Opportunities</h3>
        <p className="text-gray-700 mb-6">
          Explore our current job openings and discover exciting career
          opportunities at <span className="text-blue-500">Visit and Buy</span>. We
          have positions available in various departments, each offering a
          unique chance to contribute to our success.
        </p>

        <h3 className="text-2xl font-bold mb-2">Why Join Us?</h3>
        <p className="text-gray-700 mb-6">
          Joining <span className="text-blue-500">Visit and Buy</span> means
          becoming part of a passionate and innovative team. We value
          creativity, diversity, and a commitment to excellence. Our workplace
          fosters a culture of continuous learning and growth, providing ample
          opportunities for professional development.
        </p>

        <h3 className="text-2xl font-bold mb-2">How to Apply</h3>
        <p className="text-gray-700 mb-6">
          To apply for a position, please send your resume and cover letter to
          careers@harmsales.com. Be sure to include the position title in the
          subject line. Our hiring team will review your application, and if
          your qualifications match our needs, we will be in touch for further
          discussions.
        </p>

        <h3 className="text-2xl font-bold mb-2">Employee Benefits</h3>
        <p className="text-gray-700 mb-6">
          We believe in taking care of our team members. Our comprehensive
          benefits package includes competitive salaries, health and wellness
          programs, flexible work schedules, and opportunities for career
          advancement. We strive to create an inclusive and supportive work
          environment where everyone can thrive.
        </p>

        <h3 className="text-2xl font-bold mb-2">
          Join Us in Making a Difference
        </h3>
        <p className="text-gray-700 mb-6">
          Become a part of <span className="text-blue-500">Visit and Buy</span> and
          contribute to our mission of providing exceptional products and
          services to our customers. Together, we can create a positive impact
          and build a successful future.
        </p>

        <p className="text-gray-700">
          Thank you for considering a career with{" "}
          <span className="text-blue-500">Visit and Buy</span>. We look forward to
          the possibility of working with you!
        </p>
      </div>
      <Footer />
    </>
  );
};

export default CareerPage;
