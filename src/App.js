
import './App.css';
import Banner from './Banner';
import Header from './Header';
import requests from './request';
import Row from './Row';

function App() {
  return (
    <div className="App">
     <Header/>
     <Banner/>
     <Row
       title="NETFLIX ORIGINALS"
       fetchUrl={requests.fetchNetflixOriginals}
       /*isLargeRow={true}*/
     />
     <Row
       title="Trending Now"
       fetchUrl={requests.fetchTrending}
     />
     <Row
       title="Top Rated"
       fetchUrl={requests.fetchTopRated}
     />
     <Row
       title="Action Movies"
       fetchUrl={requests.fetchActionMovies}
     />
     <Row
       title="Horror Movies"
       fetchUrl={requests.fetchHorrorMovies}
     />
     <Row
       title="Romance Movies"
       fetchUrl={requests.fetchRomanticMovies}
     />
     <Row 
       title="Documentaries Movies"
       fetchUrl={requests.fetchDocumentaries}
     />
     <Row 
       title="Comedy Movies"
       fetchUrl={requests.fetchComedyMovies}
     />
    </div>
  );
}

export default App;
