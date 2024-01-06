const FoodCard = ({ food }) => {
  const { Name, ImageUrl } = food;
  return (
    <div className="w-[100%] rouded-lg">
    
        <div className="overflow-hidden rounded-lg">
        <img
          src={ImageUrl}
          alt="food"
          className="h-[250px] w-[100%] object-cover hover:scale-125 duration-1000 rounded-lg"
        />
        </div>
        
          <h3 className="my-2 text-center">{Name}</h3>
        
      
    </div>
  );
};

export default FoodCard;
