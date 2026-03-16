import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-20 2xl:px-32 py-16 flex flex-col gap-16">

      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-5xl font-bold text-red-500 tracking-wider">
          About MovieHub
        </h1>
        <p className="mt-6 text-gray-300 text-lg max-w-2xl mx-auto">
          MovieHub is your ultimate destination for exploring the latest movies, trending shows,
          and everything entertainment. Dive into a world of cinematic magic and stay updated
          with new releases every day.
        </p>
      </section>

      {/* Features / Mission */}
      <section className="grid md:grid-cols-3 gap-10 text-center">
        
        <div className="bg-zinc-900 p-8 rounded-xl shadow-lg hover:scale-105 transition transform">
          <h2 className="text-2xl font-bold text-red-500 mb-3">Latest Movies</h2>
          <p className="text-gray-300">
            Stay updated with all the new movie releases and trending films worldwide.
          </p>
        </div>

        <div className="bg-zinc-900 p-8 rounded-xl shadow-lg hover:scale-105 transition transform">
          <h2 className="text-2xl font-bold text-red-500 mb-3">Curated Lists</h2>
          <p className="text-gray-300">
            Explore curated lists of top-rated movies and shows to help you decide what to watch next.
          </p>
        </div>

        <div className="bg-zinc-900 p-8 rounded-xl shadow-lg hover:scale-105 transition transform">
          <h2 className="text-2xl font-bold text-red-500 mb-3">Cinematic Experience</h2>
          <p className="text-gray-300">
            Enjoy a smooth and immersive movie experience with trailers, ratings, and summaries.
          </p>
        </div>

      </section>

      {/* Team / About us */}
      <section className="text-center">
        <h2 className="text-3xl font-bold text-red-500 mb-6">Our Mission</h2>
        <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
          At MovieHub, our mission is to bring the magic of cinema to your fingertips.
          We aim to provide movie lovers with a seamless and interactive platform to
          discover, watch, and enjoy movies and shows from around the globe.
        </p>
      </section>

    </div>
  );
};

export default About;