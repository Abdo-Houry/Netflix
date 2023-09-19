const AOI_KEY = "f81cf19462173200a942927ce17b3982";
// https://api.themoviedb.org/3/movie/550?api_key=f81cf19462173200a942927ce17b3982
const request = {
    fetchTrending : `/trending/all/week?api_key=${AOI_KEY}&language=en-US`,
    fetchNetflixOriginals :`/discover/tv?api_key=${AOI_KEY}&with_networks=213`,
    fetchToRated :`/movie/top_rated?api_key=${AOI_KEY}&language=en-US`,
    fetchActionMovies :`/discover/movie?api_key=${AOI_KEY}&with_genres=28`,
    fetchComedyMovies :`/discover/movie?api_key=${AOI_KEY}&with_genres=35`,
    fetchHorrorMovies : `/discover/movie?api_key=${AOI_KEY}&with_genres=27`,
    fetchRomanceMovies :`/discover/movie?api_key=${AOI_KEY}&with_genres=10749`,
    fetchDocumentaries : `/discover/movie?api_key=${AOI_KEY}&with_genres=99`
}
export default request