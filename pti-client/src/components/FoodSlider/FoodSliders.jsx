import { useContext } from "react";
import MySlider from "./MySlider";
import { FoodContext } from "../../providers/FoodsProvider";

const FoodSliders = () => {
const {isLoading,foods,setFoods, serverError} = useContext(FoodContext)
  return (
    <div className=" my-20 gap-10">
      
      {isLoading && <span>Loading...</span>}
      {isLoading && serverError ? (
        <span>Error Loading Data...</span>
      ) : (
      
        
          <div className=" ">
            
          <MySlider heading={'Popular'} foods={foods.filter(food=>food.IsPopular === true)} setFoods={setFoods}></MySlider>
          <MySlider heading={'Recommended'} foods={foods.filter(food=>food.IsRecommended === true)} setFoods={setFoods}></MySlider>
          
          </div>
        
        
      )}
    </div>
  );
};

export default FoodSliders;
