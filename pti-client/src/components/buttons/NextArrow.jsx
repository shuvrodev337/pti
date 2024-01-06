import { FaGreaterThan } from "react-icons/fa";
const NextArrow = ({ onClick }) => {
  return (
    <div
      className="absolute right-[50px] -top-[30px] cursor-pointer "
      onClick={onClick}
      
      
    >
      <FaGreaterThan  className="text-gray-800"/>
    </div>
  );
};

export default NextArrow;
