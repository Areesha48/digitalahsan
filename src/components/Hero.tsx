
export const Hero = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
      <div className="animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Welcome to{" "}
          <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Channel Hub
          </span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Discover amazing content across our WhatsApp channels, Instagram, and Telegram. 
          Join thousands of subscribers and stay updated with the latest trends!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-gradient-to-r from-green-400 to-green-600 text-white px-8 py-3 rounded-full font-semibold hover:from-green-500 hover:to-green-700 transform hover:scale-105 transition-all duration-200 shadow-lg">
            Explore Channels
          </button>
          <button className="border-2 border-green-500 text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-green-50 transform hover:scale-105 transition-all duration-200">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};
