import logo from './logo.svg';
import './App.css';
import Row from "./Row"
import requests from "./request"
import Banner from "./Banner"
import Nav from "./Nav"

function App(){
  return (
    <div className="App">
      <Nav />
      <Banner />


      <Row
        isLargeRow
        title="NETLIX ORIGINALS" 
        fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Trending now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horrors" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
