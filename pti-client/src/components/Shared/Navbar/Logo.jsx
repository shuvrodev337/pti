import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <h3 className="font-bold text-3xl">pti<span className="text-red-500">.</span></h3>
    </Link>
  );
};

export default Logo;
