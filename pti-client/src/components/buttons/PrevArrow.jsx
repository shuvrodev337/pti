import { FaLessThan } from "react-icons/fa";
const PrevArrow = ({onClick}) => {
    return (
        <div className='absolute right-[68px] -top-[30px] cursor-pointer' onClick={onClick}>
           <FaLessThan   className="text-gray-600"/>
        </div>
    );
};

export default PrevArrow;