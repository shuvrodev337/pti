import useFoods from "../../hooks/useFoods";
import foodImg from "../../assets/images/Image1.png";
import { useForm } from "react-hook-form";
import generateRandomId from "../../utils/generateRandomId";
import {  useNavigate } from "react-router-dom";

const AddFood = () => {
    const navigate = useNavigate()

  const [, foods,setFoods] = useFoods();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  
  const onSubmit = (addedFood) => {
      addedFood.Id = generateRandomId();
      addedFood.price = parseInt(addedFood.price)
      console.log(addedFood);
      const newFoods = [...foods, addedFood]
      setFoods(newFoods)
      navigate("/")
  };
  return (
    <div className="bg-[#F99F1C] rounded-3xl flex justify-center items-center">
      <div className="w-2/5">
        <img className="w-full mx-auto" src={foodImg} alt="banner-image" />
      </div>
      <div className="w-3/5  p-6 ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 ng-untouched ng-pristine ng-valid w-9/12 mx-auto"
        >
          <div className="space-y-4 ">
            {/* Input fields here */}
            <div>
              <label htmlFor="name" className="block mb-2 text-sm text-white">
                Food Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter Food Name Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none bg-gray-200 text-gray-900"
                {...register("name", { required: true })}                
              />
              {errors.name?.type === "required" && (
                    <p className="text-red-600 mt-2 text-sm">Food name is required!</p>
                  )}
            </div>
            <div>
              <label
                htmlFor="imageUrl"
                className="block mb-2 text-sm text-white"
              >
                Image URL
              </label>
              <input
                type="text"
                id="imageUrl"
                placeholder="Enter Food Image URL"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none bg-gray-200 text-gray-900"
                {...register("imageUrl", { required: true })}
              />
              {errors.imageUrl?.type === "required" && (
                    <p className="text-red-600 mt-2 text-sm">URL field required!</p>
                  )}
            </div>
            <div>
              <label htmlFor="price" className="block mb-2 text-sm text-white">
                Price
              </label>
              <input
                type="number"
                id="price"
                placeholder="Enter Food Price Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none bg-gray-200 text-gray-900"
                {...register("price", { required: true })}
              />
              {errors.price?.type === "required" && (
                    <p className="text-red-600 mt-2 text-sm">Please put a valid number!</p>
                  )}
            </div>
            <div className="flex items-baseline justify-around">
              <label
                htmlFor="popular"
                className="block text-lg text-white "
              >
                <input
                  type="checkbox"
                  id="popular"
                  className=" text-blue-500 focus:ring-blue-500 h-4 w-4"
                  {...register("IsPopular", { required: false })}
                />
                <span className="ml-2">Popular</span>
              </label>
              <label
                htmlFor="recommended"
                className="block text-lg text-white "
              >
                <input
                  type="checkbox"
                  id="recommended"
                  className=" text-blue-500 focus:ring-blue-500 "
                  {...register("IsRecommended", { required: false })}
                />
                <span className="ml-2">Recommended</span>
              </label>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="bg-[#FD4E03] cursor-pointer  w-full rounded-md py-3 text-white"
            >
              Add Food
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddFood;
