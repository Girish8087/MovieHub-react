import React from "react";

const LoadingScreen = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-black text-white">

      {/* Logo */}
      <h1 className="text-4xl font-bold tracking-widest">
        Movie<span className="text-red-500">Hub</span>
      </h1>

      {/* Spinner */}
      <div className="mt-8 w-14 h-14 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>

      {/* Loading text */}
      <p className="mt-6 text-gray-400 text-lg animate-pulse">
        Fetching Movies...
      </p>

      {/* Fake loading bars */}
      <div className="mt-10 w-72 space-y-3">
        <div className="h-3 bg-zinc-800 rounded animate-pulse"></div>
        <div className="h-3 bg-zinc-800 rounded animate-pulse"></div>
        <div className="h-3 bg-zinc-800 rounded animate-pulse"></div>
      </div>

    </div>
  );
};

export default LoadingScreen;