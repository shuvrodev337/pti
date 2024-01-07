import { useForm } from "react-hook-form";
import generateRandomId from "../../utils/generateRandomId";

const AddFoodModal = ({foods,setFoods,handleClose}) => {


    //Form data process

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
    
      
      const onSubmit = (addedFood) => {
          addedFood.Id = generateRandomId();
          addedFood.price = parseInt(addedFood.price)
          const newFoods = [...foods, addedFood]
          setFoods(newFoods)
          handleClose()
      };


    return (
        <div className="w-[300px] md:w-[600px] mx-auto p-3 md:p-6">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 ng-untouched ng-pristine ng-valid w-full mx-auto"
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
                {...register("Name", { required: true })}                
              />
              {errors.Name?.type === "required" && (
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
                {...register("ImageUrl", { required: true })}
              />
              {errors.ImageUrl?.type === "required" && (
                    <p className="text-red-600 mt-2 text-sm">URL field required!</p>
                  )}
            </div>
            <div>
              <label htmlFor="Price" className="block mb-2 text-sm text-white">
                Price
              </label>
              <input
                type="number"
                id="price"
                placeholder="Enter Food Price Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none bg-gray-200 text-gray-900"
                {...register("Price", { required: true })}
              />
              {errors.Price?.type === "required" && (
                    <p className="text-red-600 mt-2 text-sm">Please put a valid number!</p>
                  )}
            </div>
            <div className="flex flex-col items-baseline justify-around">
              <label
                htmlFor="popular"
                className="block md:text-lg text-white "
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
                className="block md:text-lg text-white "
              >
                <input
                  type="checkbox"
                  id="recommended"
                  className=" text-blue-500 focus:ring-blue-500 h-4 w-4"
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
    );
};

export default AddFoodModal;