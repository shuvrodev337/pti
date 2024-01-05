import bannerImg from "../../assets/images/Image1.png"
const Banner = () => {
    return (
        <div className="bg-[#F99F1C] rounded-3xl flex justify-center items-center">
            <div className="w-3/5 flex flex-col  text-white pl-36  space-y-4 text-left">
                <h3 className="text-5xl font-medium">Deliver Food To Your <br /> Door Step</h3>
                <p className="text-lg ">Authentic Food, Quick Service, Fast Delivery</p>
            </div>
            <div className="w-2/5">
                <img className="w-full mx-auto" src={bannerImg} alt="banner-image" />
            </div>
            
        </div>
    );
};

export default Banner;