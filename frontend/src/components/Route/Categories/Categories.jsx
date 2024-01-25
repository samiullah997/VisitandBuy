import React from "react";
import { categoriesData } from "../../../static/data";
import styles from "../../../styles/styles";
import { useSelector } from "react-redux";
import SimpleProductCard from "../ProductCard/SimpleProductCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Categories = () => {
  const { allProducts } = useSelector((state) => state.products);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3500 },
      items: 8,
    },
    LargeDesktop: {
      breakpoint: { max: 3500, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
    
  };
  

  return (
    <>
      {categoriesData &&
        categoriesData.map((category) => {
          // Filter products for the current category
          const categoryProducts = allProducts
            ? allProducts.filter((product) => product.category === category.title)
            : [];

          // Check if the category has products before rendering
          if (categoryProducts.length === 0) {
            return null; // Skip rendering empty categories
          }

          return (
            <div
              key={category.title}
              className={`${styles.section} bg-white p-6 rounded-lg mb-12`}
            >
              <h3 className="text-2xl font-bold mb-4">{category.title}</h3>
              <div style={{ position: "relative" }}>
                <Carousel
                swipeable={true}
                draggable={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                >
                  {categoryProducts.map((product) => (
                    <SimpleProductCard key={product.id} data={product} />
                  ))}
                </Carousel>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default Categories;
