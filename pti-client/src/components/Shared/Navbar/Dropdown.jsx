import { useState } from "react";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import menuItems from "./menu.json";
import { Link } from "react-router-dom";
const Dropdown = () => {
  // const [age, setAge] = useState('');

  // const handleChange = (event) => {
  //   setAge(event.target.value);
  // };
  const [isOpen, SetIsOpen] = useState(false);

  return (
    <div className="relative flex flex-col items-center w-[180px] rounded-lg">
      <button
        onClick={() => SetIsOpen(!isOpen)}
        className="bg-white py-0 px-2 w-full flex items-center justify-between font-semibold text-base rounded-lg tracking-wider border-4 border-transparent active:border-white duration-300 active:text-[#FD4E03]"
      >
        MENU{" "}
        {!isOpen ? (
          <AiOutlineCaretDown className="h-8 text-[#FD4E03]"></AiOutlineCaretDown>
        ) : (
          <AiOutlineCaretUp className="h-8 text-[#FD4E03]"></AiOutlineCaretUp>
        )}
      </button>
      {isOpen && (
        <div className="bg-white absolute top-14 flex flex-col items-start rounded-lg p-3 w-full">
          {menuItems.map((item) => (
            <Link
              key={item.id}
              to={item?.path}
              className="hover:bg-gray-200 cursor-pointer  border-l-transparent  border-l-4  p-2 w-full rounded-lg hover:text-[#FD4E03]">
              <h3>{item.title}</h3>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;

{
  /* <h3 className="hover:bg-gray-200 cursor-pointer  border-l-transparent  border-l-4  p-2 w-full rounded-lg hover:text-[#FD4E03]">
            Home
          </h3>
          <h3 className="hover:bg-gray-200 cursor-pointer  border-l-transparent  border-l-4  p-2 w-full rounded-lg hover:text-[#FD4E03]">
            Details
          </h3>
          <h3 className="hover:bg-gray-200 cursor-pointer  border-l-transparent  border-l-4  p-2 w-full rounded-lg hover:text-[#FD4E03]">
            Category
          </h3>
          <h3 className="hover:bg-gray-200 cursor-pointer  border-l-transparent  border-l-4  p-2 w-full rounded-lg hover:text-[#FD4E03]">
            My Favourites
          </h3>
          <h3 className="hover:bg-gray-200 cursor-pointer  border-l-transparent  border-l-4  p-2 w-full rounded-lg hover:text-[#FD4E03]">
            Profile
          </h3>
          <h3 className="hover:bg-gray-200 cursor-pointer  border-l-transparent  border-l-4  p-2 w-full rounded-lg hover:text-[#FD4E03]">
            Log in/Sign Up
          </h3> */
}
