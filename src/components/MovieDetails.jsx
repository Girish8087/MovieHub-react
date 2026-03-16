import React from "react";
import toast from "react-hot-toast";
import { useLoaderData, useParams } from "react-router";

const MovieDetails = () => {
 
  const movie = useLoaderData()
  const IMG = "https://image.tmdb.org/t/p/w500";
  const handleWishList = () => {
    return toast.success("Added to WishList ✅")
  }

  return (
    <section className="text-white bg-black min-h-screen">

      {/* Backdrop */}
      <div className="relative w-full h-[70vh] overflow-hidden">
        <img
          src={`${IMG + movie.poster_path}`}
          alt="movie"
          className="w-full h-full object-cover brightness-75"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-black/40"></div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 -mt-40 relative z-10">

        <div className="flex flex-col md:flex-row gap-10">

          {/* Poster */}
          <div className="w-[220px] md:w-[260px] rounded-xl overflow-hidden shadow-2xl">
            <img
              src={`${IMG + movie.poster_path}`}
              alt="poster"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Details */}
          <div className="flex-1 bg-black/60 backdrop-blur-md p-6 rounded-xl">

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {movie.original_title}
            </h1>

            <p className="text-gray-200 text-sm mb-4">
              ⭐ {movie.vote_average.toFixed(1)} Rating • {movie.vote_count} Votes • English
            </p>

            <p className="text-gray-300 leading-relaxed max-w-2xl">
              {movie.overview}
            </p>

            {/* Extra Info */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6 text-sm">

              <div>
                <p className="text-gray-400">Release Date</p>
                <p className="font-semibold"> {movie.release_date} </p>
              </div>

              <div>
                <p className="text-gray-400">Language</p>
                <p className="font-semibold">{movie.original_language}</p>
              </div>

              <div>
                <p className="text-gray-400">Genres</p>
                <p className="font-semibold"> {
                  movie.genres.map((genre) => genre.name).join(" • ")
                  }</p>
              </div>

              <div>
                <p className="text-gray-400">Popularity</p>
                <p className="font-semibold"> {movie.popularity.toFixed(2)} </p>
              </div>

              <div>
                <p className="text-gray-400">Adult Content</p>
                <p className="font-semibold"> {movie.adult ? "Yes" : "No"} </p>
              </div>

              <div>
                <p className="text-gray-400">Video Available</p>
                <p className="font-semibold"> {movie.status.toLowerCase() === 'released' ? "Yes" : "No"} </p>
              </div>

            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-8">
              <button className="px-6 py-3 bg-red-600 rounded-lg hover:bg-red-700 transition">
                ▶ Watch Trailer
              </button>

              <button onClick={() => handleWishList()} className="px-6 py-3 border border-white/20 rounded-lg hover:bg-white/10 transition">
                + Add to Watchlist
              </button>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default MovieDetails;