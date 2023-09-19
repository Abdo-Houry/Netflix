import React, { useEffect, useState } from 'react';
import axios from './axios';
import request from './Request';
import "./Banner.css";
const Barnner = () => {
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const requests = await axios.get(request.fetchNetflixOriginals);
            setMovie(requests.data.results[Math.floor(Math.random() * requests.data.results.length)])
            return requests;
        }
        fetchData();
    }, []);
    function truncate(str, n){
      return str?.length > n ? str.substr(0, n-1) + "..." : str;
    }
    return (
    <header style = {{
        backgroundSize : "cover",
        backgroundPosition : "center center",
        backgroundImage : `url(
            https://image.tmdb.org/t/p/original/${movie?.poster_path}
            )`,
            color: "#fff",
            objectFit: "contain",
            height: "448px",}}>
      {/*backgrounImages*/}
      <div className='content-banner'>
        {/*title*/}
        <h2>{movie?.title || movie?.name || movie.original_name}</h2>
        {/*div > 2 button*/}
        <div className="banner-btns">
          <button className="banner-btn">Play</button>
          <button className="banner-btn">My List</button>
        </div>
        {/*description*/}
        <h1 className='banner-description'>{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className='banner-fadebottom'/>
    </header>
  )
}

export default Barnner
