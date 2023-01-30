import { getMovieList, searchMovie } from "./api";
import Navbarr from "./components/Navbarr.jsx";
import { useEffect, useState } from "react";
import Banner from "./components/Card";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";


const App = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const baseImageUrl = import.meta.env.VITE_BASEIMGURL;
  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result);
    });
  }, []);

  const search = async (q) => {
    if (q.length > 3) {
      const query = await searchMovie(q);
      setPopularMovies(query);
    }
  };

  const PopularMovieList = () => {
    return popularMovies.map((movie, i) => {
      return (
        <div className="text-center flex flex-col items-center justify-center" key={i}>
          <img className="w-60" src={`${baseImageUrl}/${movie.poster_path}`} />
          <div className="w-60">{movie.title}</div>
          <div className="my-1">{movie.release_date}</div>
          <div className="text-[rgb(250,0,0)] text-xl">{movie.vote_average}</div>
        </div>
      );
    });
  };

  console.log(popularMovies);
  return (
    <div>
      <div className="">
        <Navbarr />
      </div>

      <div className=" flex justify-center items-center bg-black pt-5 px-20">
        <Banner />
      </div>

      <div className=" bg-black px-20 py-2 relative">
        <div className="flex relative">
          <input
            type="text"
            className="py-2 my-6 rounded-full px-10 "
            placeholder="Search..."
            autoComplete="off"
            onChange={({ target }) => search(target.value)}
          />
          <MagnifyingGlassIcon className="h-6 w-6  text-gray-400 absolute top-8 left-2 "></MagnifyingGlassIcon>
          <div className="absolute top-3 right-0">
            <button className="bg-neutral-900 text-white my-3 ml-5 hover:text-[rgb(255,0,0)] hover:-translate-y-[1.5px] duration-300 rounded-lg border border-white py-2 px-8">Genre</button>
          </div>
        </div>
      </div>
      <div className=" flex flex-wrap justify-center items-center gap-10 bg-black text-white pt-4">
        <PopularMovieList />
      </div>
    </div>
  );
};

export default App;
