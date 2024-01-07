import { BiSearch } from "react-icons/bi";


const SearchBar = () => {
  return (
    <div className="w-full mx-auto bg-white  rounded-md md:w-[400px]">
      <div className="mt-1 relative rounded-md ">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <BiSearch className="text-[#FD4E03] text-xl" />
        </div>
        <input
          type="text"
          id="search"
          name="search"
          className=" py-2 pl-10 pr-4 block w-full leading-5 rounded-md outline-none sm:text-sm sm:leading-5"
          placeholder="Search Audiobook"
        />
      </div>

    </div>
  );
};

export default SearchBar;

