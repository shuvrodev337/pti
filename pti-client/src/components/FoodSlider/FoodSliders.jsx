import { useContext, useState } from "react";
import MySlider from "./MySlider";
import { FoodContext } from "../../providers/FoodsProvider";
import { Box, Modal, } from "@mui/material";
import AddFoodModal from "../AddFoodModal/AddFoodModal";

const FoodSliders = () => {
const {isLoading,foods,setFoods, serverError} = useContext(FoodContext)


const [open, setOpen] = useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  // width: 600,
  bgcolor: '#F99F1C',
  borderRadius: '0.5rem',
  boxShadow: 24,
  p: 2,
};

  return (
    <div className=" my-20 gap-10 rouded-lg">
      
      {isLoading && <span>Loading...</span>}
      {isLoading && serverError ? (
        <span>Error Loading Data...</span>
      ) : (
      
        
          <div className=" ">
            
          <MySlider heading={'Popular'} foods={foods.filter(food=>food.IsPopular === true)} handleOpen={handleOpen}></MySlider>
          <MySlider heading={'Recommended'} foods={foods.filter(food=>food.IsRecommended === true)}  handleOpen={handleOpen}></MySlider>
          
{/* Modal */}
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    
    <AddFoodModal foods={foods} setFoods={setFoods} handleClose={handleClose}></AddFoodModal>
  </Box>
</Modal>
          </div>
        
        
      )}
    </div>
  );
};

export default FoodSliders;
