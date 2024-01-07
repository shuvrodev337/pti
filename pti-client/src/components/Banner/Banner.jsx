import bannerImg from "../../assets/images/Image1.png"
const Banner = () => {
    return (
        <div className="md:bg-[#F99F1C] rounded-3xl flex flex-col md:flex-row justify-center items-center gap-6">
            <div className="md:w-3/5 flex flex-col  md:text-white md:pl-36  space-y-4 text-center md:text-left">
                <h3 className="text-3xl md:text-5xl font-medium">Deliver Food To Your <br /> Door Step</h3>
                <p className="text-base md:text-lg ">Authentic Food, Quick Service, Fast Delivery</p>
            </div>
            <div className="md:w-2/5 bg-[#FD9460] md:bg-inherit rounded-3xl">
                <img className="w-full mx-auto " src={bannerImg} alt="banner-image" />
            </div>
            
        </div>
    );
};

export default Banner;