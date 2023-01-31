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
          <img className="xl:w-60 md:w-40" src={`${baseImageUrl}/${movie.poster_path}`} />
          <div className="xl:w-60 md:w-52">{movie.title}</div>
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

      <div className="flex justify-center items-center bg-black pt-5 px-20">
        <Banner />
      </div>

      <div className=" bg-black px-20 py-2 relative md:px-12 xl:px-20 ">
        <div className="flex relative">
          <input
            type="text"
            className="py-2 my-6 md:rounded-xl xl:px-10 md:px-6 md:mx-2 md:text-sm xl:rounded-full xl:text-lg"
            placeholder="Search..."
            autoComplete="off"
            onChange={({ target }) => search(target.value)}
          />
          <MagnifyingGlassIcon className="md:h-4 md:w-4 md:top-[34px] md:left-3 xl:h-6 xl:w-6  text-gray-400 absolute xl:top-8 xl:left-4 "></MagnifyingGlassIcon>
          <div className="absolute top-3 right-0">
            <button className="bg-neutral-900 text-white my-3 ml-5 hover:text-[rgb(255,0,0)] hover:-translate-y-[1.5px] duration-300 rounded-lg border border-white py-2 px-8">
              Genre
            </button>
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
