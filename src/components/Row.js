import React, { useEffect, useState } from 'react';
import axios from './axios';
import "./Row.css";
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
const base_url_image = "https://image.tmdb.org/t/p/original/";
const Row = ({ title , fetchUrl, isLarger }) => {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            console.log(request);
            return request;
        }
        fetchData();
    }, [fetchUrl]);
    const opts = {
      height : "390",
      width : "100%",
      playerVars : {
        autoplay : 1,
      },
    };
    const handeleClick = (movie) =>{
      if(trailerUrl){
        setTrailerUrl("");
      }else{
        movieTrailer(movie?.name || "").then(url => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get('v'));
        }).catch(error => console.log(error));
      }
    }
    return (
    <div>
      <h2 className='title-row'>{title}</h2>
      <div className='posts-row'>
        {movies.map((movie) => (
            <img onClick={() => handeleClick(movie)} className={`post-imge ${isLarger && "post-imge-large"}`} key={movie.id} src={`${base_url_image}${isLarger ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
    </div>
  )
}

export default Row
