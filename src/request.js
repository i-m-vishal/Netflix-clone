const APIKEY="9ea21284f13d056a9e27ec871ab0b94a";
const requests={
    fetchNetflixOriginals:`/discover/tv?api_key=${APIKEY}&with_networks=123`,
    fetchTrending:`/trending/all/week?api_key=${APIKEY}&language=en-US`,
    fetchTopRated:`/movie/top_rated?api_key=${APIKEY}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${APIKEY}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${APIKEY}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${APIKEY}&with_genres=27`,
    fetchRomanticMovies:`/discover/movie?api_key=${APIKEY}&with_genres=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${APIKEY}&with_genres=99`
}
export default requests;