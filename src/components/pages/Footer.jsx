import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-yellow-400 text-black py-2 md:py-3 mt-20 md:mt-40">
      <div className="container mx-auto">
        <div className="flex flex-col-reverse md:flex-row justify-between items-center">
          <p className="text-md md:text-lg my-5">
            © 2024 Recipe Website. All rights reserved.
          </p>
          <div className="flex space-x-4 md:mb-0">
            <Link
              to={"/about"}
              className="text-xl hover:text-white transition-colors duration-300"
            >
              About
            </Link>
            <Link
              to={"/contact"}
              className="text-xl hover:text-white transition-colors duration-300"
            >
              Contact
            </Link>
            <Link
              to={"/private_policy"}
              className="text-xl hover:text-white transition-colors duration-300"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
