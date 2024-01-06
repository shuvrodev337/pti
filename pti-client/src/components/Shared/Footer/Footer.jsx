import footerImg from "../../../assets/images/Image2.png"
import Container from "../Container";
import Logo from "../Navbar/Logo";
import {
  AiOutlineGoogle,
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineArrowRight
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="px-4 divide-y relative bottom-0 left-0 bg-[#F99F1C] ">
      <Container>
        {/* Info */}
        <div className="flex pb-10">
          {/* Information */}
          <div className="w-3/5 flex  flex-col justify-end  p-12 gap-28">
            {/* email-subscription */}
            <div
              id="email-inputField"
              className="w-4/5  bg-white  rounded-2xl relative "
            >
              <input
                type="text"
                id="subscribe"
                name="subscribe"
                className=" py-4 px-4 block w-full leading-5 rounded-2xl outline-none sm:text-sm sm:leading-5"
                placeholder="Enter your email"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center ">
                <button className="bg-[#FC6011] text-white px-4 py-2 rounded-2xl cursor-pointer">
                  Subscribe
                  <AiOutlineArrowRight className="inline w-8 text-xl"/>
                </button>
              </div>
            </div>

            {/* Copyright-info */}
            <div>
            <Logo />
            <div className="flex justify-between  items-baseline">
              
                <p className="font-semibold">Copyright©Tripp.All rights reserved</p>
              <div className="flex gap-2 ">
                <AiOutlineGoogle className=" h-8 w-8 bg-[#FEDDBA] p-2 rounded-full text-[#FC5E04] " />
                <AiOutlineTwitter className=" h-8 w-8 bg-[#FEDDBA] p-2 rounded-full text-[#FC5E04] " />
                <AiOutlineInstagram className=" h-8 w-8 bg-[#FEDDBA] p-2 rounded-full text-[#FC5E04] " />
              </div>
            </div>
            </div>

          </div>

          {/* Image */}
          <div className="w-2/5">
                <img className="w-1/2 mx-auto" src={footerImg} alt="footer-image" />
            </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
