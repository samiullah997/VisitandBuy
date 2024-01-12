import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { brandingData, categoriesData } from "../../../static/data";
import styles from "../../../styles/styles";
import rightArrow from "../../../Assests/right_arrow.png";
import leftArrow from "../../../Assests/left_arrow.png";

const Categories = () => {
  const navigate = useNavigate();
  const categoriesRef = useRef(null);

  const handleScroll = (direction) => {
    const scrollDistance = 200; // Adjust this value as needed
    const scrollContainer = categoriesRef.current;

    if (scrollContainer) {
      if (direction === "left") {
        scrollContainer.scrollLeft -= scrollDistance;
      } else if (direction === "right") {
        scrollContainer.scrollLeft += scrollDistance;
      }
    }
  };

  return (
    <>
      <div className={`${styles.section} hidden sm:block`}>
        <div
          className={`branding my-12 flex justify-between w-full shadow-sm bg-white p-5 rounded-md`}
        >
          {brandingData &&
            brandingData.map((i, index) => (
              <div className="flex items-start" key={index}>
                {i.icon}
                <div className="px-3">
                  <h3 className="font-bold text-sm md:text-base">{i.title}</h3>
                  <p className="text-xs md:text-sm">{i.Description}</p>
                </div>
              </div>
            ))}
        </div>
      </div>

      <div className={`${styles.section} bg-white p-6 rounded-lg mb-12`}>
        <h3 className="text-2xl font-bold mb-4">Categories</h3>
        <div className="flex items-center space-x-4">
          <div
            className="text-xl font-bold cursor-pointer"
            onClick={() => handleScroll("left")}
          >
            <img className="h-10 w-10"  src={leftArrow} alt="left-arrow" />
          </div>
          <div
            className={`${styles.section} bg-white p-6 rounded-lg mb-12`}
            ref={categoriesRef}
            id="categories"
            style={{
              overflowX: "auto",
              scrollbarWidth: "none",
              "-ms-overflow-style": "none",
            }}
          >
            <style>
              {`
                #categories::-webkit-scrollbar {
                  width: 0 !important;
                  height: 0 !important;
                }
              `}
            </style>
            <div className="flex flex-nowrap space-x-4">
              {categoriesData &&
                categoriesData.map((i) => {
                  const handleSubmit = () => {
                    navigate(`/products?category=${i.title}`);
                  };
                  return (
                    <div
                      className="flex-shrink-0 w-[200px] h-[200px] cursor-pointer overflow-hidden"
                      key={i.id}
                      onClick={handleSubmit}
                    >
                      <div className="w-full h-full flex flex-col items-center justify-center border rounded-md p-4">
                        <h5
                          className="text-[18px] leading-[1.3] text-center"
                          style={{ width: "200px", height: "50px" }}
                        >
                          {i.title}
                        </h5>
                        <img
                          src={i.image_Url}
                          style={{ width: "120px", height: "120px" }}
                          className="object-cover mt-2"
                          alt=""
                        />
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
          <div
            className="text-3xl font-bold cursor-pointer"
            onClick={() => handleScroll("right")}
          >
            <img className="h-10 w-10"  src={rightArrow} alt="right-arrow" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
