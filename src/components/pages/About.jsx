function About() {
  return (
    <div className="h-[90vh] flex justify-center md:items-center mt-28 md:mt-0 p-2 md:p-0">
      <div className="bg-white p-8 rounded md:shadow-lg max-w-md">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-400">About Us</h2>
        <p className="text-lg md:text-xl text-gray-700 mb-4">
          Welcome to our recipe website! We are passionate about cooking and
          sharing delicious recipes with food enthusiasts around the world.
        </p>
        <p className="text-lg md:text-xl text-gray-700 mb-4">
          Our mission is to provide you with a variety of mouthwatering recipes
          ranging from traditional classics to innovative creations.
        </p>
        <p className="text-lg md:text-xl text-gray-700 mb-4">
          Whether you are a seasoned chef or just starting out in the kitchen,
          we have something for everyone. Explore our collection of recipes and
          start cooking today!
        </p>
      </div>
    </div>
  );
}

export default About;
