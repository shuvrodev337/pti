import { useContext, useState } from "react";
import MySlider from "./MySlider";
import { FoodContext } from "../../providers/FoodsProvider";
import { Box, Modal, Typography } from "@mui/material";
import AddFood from "../../pages/AddFood/AddFood";

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
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

  return (
    <div className=" my-20 gap-10">
      
      {isLoading && <span>Loading...</span>}
      {isLoading && serverError ? (
        <span>Error Loading Data...</span>
      ) : (
      
        
          <div className=" ">
            
          <MySlider heading={'Popular'} foods={foods.filter(food=>food.IsPopular === true)} setFoods={setFoods} handleOpen={handleOpen}></MySlider>
          <MySlider heading={'Recommended'} foods={foods.filter(food=>food.IsRecommended === true)} setFoods={setFoods}  handleOpen={handleOpen}></MySlider>
          
{/* Modal */}
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    {/* <Typography id="modal-modal-title" variant="h6" component="h2">
      Text in a modal
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
      Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
    </Typography> */}
    <AddFood foods={foods} setFoods={setFoods} handleClose={handleClose}></AddFood>
  </Box>
</Modal>
          </div>
        
        
      )}
    </div>
  );
};

export default FoodSliders;
