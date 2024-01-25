import React from "react";
import { backend_url } from "../../../server";
import { Link } from "react-router-dom";

const SimpleProductCard = ({ data, isEvent }) => {
  return (
    <div className="w-60 h-60 ml-14 shadow-md bg-gray-900 rounded-lg border-4 border-gray-900 transition-transform duration-400 ease-in hover:translate-y-[-1.5rem] hover:border-pink-500">
      {/* <!-- Card content goes here --> */}
      <Link
        to={`${
          isEvent === true
            ? `/product/${data._id}?isEvent=true`
            : `/product/${data._id}`
        }`}
      >
        <img
          src={`${backend_url}${data.images && data.images[0]}`}
          alt=""
          className="w-full h-full object-fill"
        />
      </Link>
    </div>
  );
};

export default SimpleProductCard;
