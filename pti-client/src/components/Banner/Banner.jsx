import bannerImg from "../../assets/images/Image1.png"
const Banner = () => {
    return (
        <div className="bg-[#F99F1C] rounded-3xl flex justify-center items-center">
            <div className="w-1/2 flex flex-col  text-white pl-24  space-y-4 text-left">
                <h3 className="text-5xl ">Deliver Food To Your Door Step</h3>
                <p className="text-lg ">Authentic Food, Quick Service, Fast Delivery</p>
            </div>
            <div className="w-1/2">
                <img className="w-full mx-auto" src={bannerImg} alt="banner-image" />
            </div>
            
        </div>
    );
};

export default Banner;