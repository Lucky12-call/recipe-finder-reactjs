import { Route, Routes } from "react-router-dom";
import RootLayout from "./components/root_layout/RootLayout";
import CategoryFood from "./components/pages/category_food/CategoryFood";
import Navbar from "./components/navbar/Navbar";
import FilterByIngredient from "./components/pages/category_food/FilterByIngredient";
import FilterByArea from "./components/pages/category_food/FilterByArea";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Footer from "./components/pages/Footer";
import PrivatePolicy from "./components/pages/PrivatePolicy";
import MealById from "./components/pages/MealById";
import SearchByLetter from "./components/pages/SearchByLetter";

const App = () => {
  return (
    <div className=" font-sans">
      <div className="relative z-10">
        <Navbar />
      </div>
      <div className="z-0">
        <Routes>
          <Route path="/" element={<RootLayout />} />
          <Route path="category/category_food" element={<CategoryFood />} />
          <Route path="search_recipe/meal_by_id" element={<MealById />} />
          <Route
            path="filter_by_ingredient/meal_by_id"
            element={<MealById />}
          />
          <Route path="filter_by_area/meal_by_id" element={<MealById />} />
          <Route path="category_food/meal_by_id" element={<MealById />} />
          <Route
            path="filter_by_first_letter/meal_by_id"
            element={<MealById />}
          />
          <Route path="/filter_by_area" element={<FilterByArea />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/private_policy" element={<PrivatePolicy />} />
          <Route path="/search_by_letter" element={<SearchByLetter />} />
          <Route
            path="/filter_by_ingredient"
            element={<FilterByIngredient />}
          />
          <Route path="/*" element={<h1>Page Not Found</h1>} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
};

export default App;
