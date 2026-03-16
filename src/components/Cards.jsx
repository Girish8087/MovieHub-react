import React from "react";
import { NavLink } from "react-router";
import toast from "react-hot-toast";

const Cards = ({ movie }) => {

  const IMG = "https://image.tmdb.org/t/p/w500";

  return (
    <NavLink to={`/movies/${movie.id}`} className="group relative w-full h-[380px] rounded-xl overflow-hidden cursor-pointer">

      {/* Poster */}
      <img
        src={`${IMG}${movie.poster_path}`}
        alt={movie.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

      {/* Rating badge */}
      <div className="absolute top-3 right-3 bg-black/70 text-yellow-400 text-sm px-2 py-1 rounded-md backdrop-blur">
        ⭐ {movie.vote_average.toFixed(1)}
      </div>

      {/* Bottom Content */}
      <div className="absolute bottom-0 p-4 w-full">

        <h2 className="text-white text-lg font-semibold leading-tight line-clamp-2">
          {movie.title}
        </h2>

        <p className="text-gray-300 text-sm mt-1">
          {movie.release_date?.slice(0,4)}
        </p>

      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/70 opacity-0 transition duration-300 group-hover:opacity-100">

        <button className="px-4 py-2 bg-red-600 text-white text-sm rounded-full hover:bg-red-700 transition">
          View Details
        </button>

      </div>

      {/* Glow */}
      <div className="absolute inset-0 border border-white/10 rounded-xl group-hover:border-red-500/50 transition duration-500"></div>

    </NavLink>
  );
};

export default Cards;