import './App.css';
import Row from './components/Row';
import request from './components/Request';
import Banner from './components/Banner';
import Nav from './components/Nav';
function App() {
  return (
    <div className="App">
      <Nav />
      <Banner/>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={request.fetchNetflixOriginals}
      />
      <Row 
      title="NETFLIX TRENDING"
      fetchUrl={request.fetchTrending}
      />
            <Row 
      title="NETFLIX TOP RATED"
      fetchUrl={request.fetchTopRated}
      />
      <Row 
      title="NETFLIX ROMANCE MOVIES"
      fetchUrl={request.fetchRomanceMovies}
      />
      <Row 
      title="NETFLIX HORROR MOVIES"
      fetchUrl={request.fetchHorrorMovies}
      />
      <Row 
      title="NETFLIX ACTION MOVIES"
      fetchUrl={request.fetchActionMovies}
      />
      <Row 
      title="NETFLIX DOCUMENTARIES"
      fetchUrl={request.fetchDocumentaries}
      />
      <Row 
      title="NETFLIX COMEDY MOVIES"
      fetchUrl={request.fetchComedyMovies}
      />

    </div>
  );
}

export default App;
