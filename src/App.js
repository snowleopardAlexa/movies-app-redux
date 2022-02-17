import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './components/Home/Home';
import MovieDetail from './components/MovieDetail/MovieDetail';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="app">
     <Header/>
     <Routes>
       <Route path="/" element={<Home />}></Route>
       <Route path="/movie/:imdbID" element={<MovieDetail />}></Route>
       <Route element={<PageNotFound />}></Route>
     </Routes>
     <Footer />
    </div>
  );
}

export default App;
