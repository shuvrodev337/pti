import Slider from "react-slick";
import FoodCard from "./FoodCard";
import NextArrow from "../buttons/NextArrow";
import PrevArrow from "../buttons/PrevArrow";

const MySlider = ({ heading, foods, handleOpen }) => {

  // Slider settings
  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4.7,
            slidesToScroll: 1,
            infinite: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 4.7,
            slidesToScroll: 1,
            infinite: true,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 2.7,
            slidesToScroll: 1,
            infinite: true,

        },
      },
    ],
  };

  return (
    <div className="my-10 relative">
      <div className="flex justify-between">
        <h3 className="text-lg md:text-xl my-2 ml-2">{heading}</h3>
        <button
          onClick={() => handleOpen()}
          className="text-[#F8854B] mr-24 hover:text-[#FD4E03]"
        >
          AddMore
        </button>
      </div>
      <Slider {...settings}>
        {foods.map((food) => (
          <FoodCard food={food} key={food.Id}></FoodCard>
        ))}
      </Slider>
    </div>
  );
};

export default MySlider;
