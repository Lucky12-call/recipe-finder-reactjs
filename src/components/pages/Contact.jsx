function Contact() {
  return (
    <div className="h-[90vh] w-full flex justify-center md:items-center mt-28 md:mt-0 p-2 md:p-0">
      <div className="bg-white p-8 rounded w-full md:w-1/2 shadow-lg">
        <h2 className="text-3xl md:text-4xl text-yellow-400 font-bold mb-4">Contact Us</h2>
        <form>
          <div className="mb-4">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              className="w-full border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:border focus:border-yellow-400"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border focus:border-yellow-400"
            />
          </div>
          <div className="mb-4">
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              rows="4"
              className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border focus:border-yellow-400"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-yellow-400 px-4 py-2 rounded-md hover:bg-yellow-500 hover:scale-110 transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
