import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from "../../public/list.json";
import Cards from "./Cards";

const FreeBook = () => {
  const filterData = list.filter((data) => data.category == "free");
  // console.log(filterData);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 600);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return (
    <>
      <div className="max-w-screen-2x1 container mx-auto md:px-20 px-1">
        <div>
          <h1 className="text-2xl font-bold">Free Offered Book</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            eaque itaque id dolor, fugit beatae ipsam nesciunt minus. Explicabo,
            soluta.
          </p>
        </div>

        <div>
          {isMobile ? (
            <div className="flex flex-col gap-4">
              {filterData.map((item) => (
                <Cards item={item} key={item.id} />
              ))}
            </div>
          ) : (
            <Slider {...settings}>
              {filterData.map((item) => (
                <Cards item={item} key={item.id} />
              ))}
            </Slider>
          )}
        </div>
      </div>
    </>
  );
};

export default FreeBook;
