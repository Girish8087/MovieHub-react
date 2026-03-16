import React from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router";
import { NavLink } from "react-router-dom";
import Cards from "./Cards";

const Home = () => {

  const movies = useLoaderData();
  const featured = movies.results[0];   // first movie as banner
  const IMG = "https://image.tmdb.org/t/p/original";

  const handleWatchList = () => {
    toast.success("Added to WatchList ✅")
  }

  return (
    <div className="bg-black text-white min-h-screen">

      {/* HERO BANNER */}
      <section className="relative w-full h-[70vh] overflow-hidden">

        <img
          src={`${IMG}${featured.backdrop_path}`}
          alt={featured.title}
          className="w-full h-full object-cover brightness-75"
        />

        {/* gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>

        {/* banner content */}
        <div className="absolute bottom-16 left-10 max-w-xl">

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {featured.title}
          </h1>

          <p className="text-gray-300 line-clamp-3 mb-6">
            {featured.overview}
          </p>

          <div className="flex gap-4">
            <NavLink
              to={`/movies/${featured.id}`}
              className="px-6 py-3 bg-red-600 rounded-lg hover:bg-red-700 transition"
            >
              ▶ View Details
            </NavLink>

            <button onClick={() => handleWatchList()} className="px-6 py-3 bg-white/20 backdrop-blur rounded-lg hover:bg-white/30 transition">
              + Watchlist
            </button>
          </div>

        </div>
      </section>


      {/* MOVIE GRID */}
      <section className="px-6 md:px-12 py-12">

        <h2 className="text-2xl font-semibold mb-6">
          Popular Movies
        </h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {movies.results.map((movie) => {
            return <Cards key={movie.id} movie={movie} />;
          })}
        </ul>

      </section>

    </div>
  );
};

export default Home;