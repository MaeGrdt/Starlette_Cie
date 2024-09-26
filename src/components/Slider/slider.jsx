import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Card, CardFooter, Image } from "@nextui-org/react";
import { NextArrow, PrevArrow } from "./customArrows";
import './style.css';

export default function SliderHome() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "500px",
    autoplay: true,
    autoplaySpeed: 10000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1595,
        settings: {
          centerPadding: "400px",
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          centerPadding: "380px",
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          centerPadding: "350px",
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          centerPadding: "100px",
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          centerPadding: "70px",
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          centerPadding: "50px",
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerPadding: "0px",
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="slider-container mt-4 w-full">
        <Slider {...settings}>
          {/* Première slide */}
          <div className="px-8">
            <Card
              isFooterBlurred
              radius="lg"
              className="border-none relative mb-5"
            >
              <Image
                alt="image de carousel"
                className="object-cover w-full"
                src="../img/starlette_vache.jpg"
              />
              <a href="#">
                <CardFooter className="bg-white/20 border-white/50 border-1 py-1 absolute rounded-lg shadow-small z-10 left-1/2 transform -translate-x-1/2 bottom-8 w-[calc(50%)] flex justify-center items-center">
                  <h1 className="text-danger-100 text-2xl font-regular">
                    Titre de l&#39;article
                  </h1>
                </CardFooter>
              </a>
            </Card>
          </div>

          {/* Seconde slide */}
          <div className="px-8">
            <Card
              isFooterBlurred
              radius="lg"
              className="border-none relative mb-5"
            >
              <Image
                alt="image de carousel"
                className="object-cover w-full"
                src="../img/groupe_vaches.jpg"
              />
              <a href="#">
                <CardFooter className="bg-white/20 border-white/50 border-1 py-1 absolute rounded-lg shadow-small z-10 left-1/2 transform -translate-x-1/2 bottom-8 w-[calc(50%)] flex justify-center items-center">
                  <h1 className="text-danger-100 text-2xl font-regular">
                    Titre de l&#39;article
                  </h1>
                </CardFooter>
              </a>
            </Card>
          </div>

          {/* 3eme slide */}
          <div className="px-8">
            <Card
              isFooterBlurred
              radius="lg"
              className="border-none relative mb-5"
            >
              <Image
                alt="image de carousel"
                className="object-cover w-full"
                src="../img/groupe_chevres.jpg"
              />
              <a href="#">
                <CardFooter className="bg-white/20 border-white/50 border-1 py-1 absolute rounded-lg shadow-small z-10 left-1/2 transform -translate-x-1/2 bottom-8 w-[calc(50%)] flex justify-center items-center">
                  <h1 className="text-danger-100 text-2xl font-regular">
                    Titre de l&#39;article
                  </h1>
                </CardFooter>
              </a>
            </Card>
          </div>
        </Slider>
      </div>
    </>
  );
}
