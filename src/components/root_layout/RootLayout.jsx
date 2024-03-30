import Category from "../pages/Category";
import Feedback from "../pages/Feedback";
import Home from "../pages/Home";
import TrendingMeal from "../pages/TrendingMeal";
import Letter from "../pages/Letter";

const RootLayout = () => {
  return (
    <div className="w-full md:w-[80%] md:mx-auto">
      <Home />
      <Feedback />
      <TrendingMeal />
      <Category />
      <Letter />
    </div>
  );
};

export default RootLayout;
