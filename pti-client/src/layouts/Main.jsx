import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar/Navbar";
import Footer from "../components/Shared/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="pt-12 pb-10 md:pt-28 md:pb-20">
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
