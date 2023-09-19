import './App.css';
import React from 'react';
import Row from './components/Row';
import request from "./components/Request";
import Barnner from "./components/Barnner";
import Nav from "./components/Nav";
function App() {
  return (
    <div className="app">
      <Nav />
      <Barnner />
      <Row isLarger={true} title="NETFLIX ORIGINALS" fetchUrl={request.fetchNetflixOriginals}/>
      <Row title="Trending Now" fetchUrl={request.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={request.fetchToRated}/>
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchUrl={request.fetchDocumentaries}/>
      </div>
  );
}
export default App;
// 19f84e11932abbc79e6d83f82d6d1045
//https://netflix-clone-5966a.web.app