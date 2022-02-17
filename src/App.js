import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './components/Home';
import MovieDetail from './components/MovieDetail/MovieDetail';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="app">
     <Routes>
       <Header></Header>
       <Route path="/" element={<Home />}></Route>
       <Route path="/movie/imdbID" element={<MovieDetail />}></Route>
       <Route element={<PageNotFound />}></Route>
       <Footer />
     </Routes>
    </div>
  );
}

export default App;
