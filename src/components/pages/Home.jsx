import { useRef } from "react";
import { useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { animateBox } from "../pages/animation/animation";
import { Link } from "react-router-dom";

const Home = () => {
  const home = useRef();

  useEffect(() => {
    animateBox(home);
  }, []);

  return (
    <div
      ref={home}
      className="relative w-full h-[90vh]  flex flex-col-reverse md:flex-row justify-evenly md:justify-between items-center p-2 md:p-0 mt-20"
    >
      <img
        src="https://firangiburgers.com/wp-content/uploads/2023/12/Firangi-Aloo-Tikki-burger.png"
        alt="burger"
        className="h-24 absolute top-24 left-0 md:-left-24"
      />
      <div>
        <h1 className="text-4xl md:text-7xl font-semibold">
          Make Your <br /> <span className="text-yellow-400">Dream Food</span>
          <br /> With Us
        </h1>
        <Link to={'/contact'}>
          <button className="flex gap-3 items-center justify-center bg-yellow-400 hover:bg-yellow-500 px-4 md:px-6 py-2 md:py-3 mt-10 md:text-xl rounded-md hover:scale-110 transition-all">
            Get Started <FaArrowRightLong />{" "}
          </button>
        </Link>
      </div>
      <div>
        <img
          src="https://cdn.metrodiner.io/wp-content/uploads/2022/05/breakfast-burger-1.png"
          alt="main-img"
          className="h-80 md:h-[550px] w-80 md:w-[550px]  hover:scale-105 transition-transform"
        />
      </div>
    </div>
  );
};

export default Home;
