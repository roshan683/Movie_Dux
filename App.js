import logo from './logo.svg';
import './App.css';
import './styles.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import MoviesGrid from './Components/MoviesGrid';
import MoviesGrid1 from './Components/MoviesGrid1';
import MoviesGrid2 from './Components/MoviesGrid2';
import Watchlist from './Components/Watchlist';
import {BrowserRouter as Router,Routes,Route, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";



import Rating from './Components/Rating';

function App() {
    const [movies, setMovies] = useState([]);
    const[watchlist, setWatchlist]=useState([]);

    useEffect(() => {
      fetch("/movies.json")
        .then((response) => response.json())
        .then((data) => setMovies(data));
    }, []);

   const toggleWatchlist =(movieId)=>{
    setWatchlist(prev =>prev.includes(movieId) ? prev.filter(id=>id!==movieId) : [...prev,movieId] 
  )
   }
   /* the state which is having previous sate=original state*/
   /*toogle is adding and remving id from movies*/
  /*so prev includes movie id if yes it includes then filter it out by id*/ 


  return (
    <div className="App">
   <div className='container'>    
      <header className="header">
         <h1> Welcome to Moviedux</h1>
      </header>
      </div>
  <Header></Header>
  <Router>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/watchlist">Watchlist</Link>
        </li>
      </ul>
    </nav>
    <Routes>
        <Route path="/" element={<MoviesGrid2 movies={movies} watchlist={watchlist} toggleWatchlist={toggleWatchlist}></MoviesGrid2>}></Route>
        <Route path="/watchlist" element={<Watchlist movies={movies} watchlist={watchlist} toggleWatchlist={toggleWatchlist}></Watchlist>}></Route>
    </Routes>
          {/*Smooth Navigation: Switch between pages without refreshing the browser
             A router is the directory board at the mall entrance. It shows where each section is and helps you go there easily. In React,
            this means moving between components without reloading the entire website.*/ }
 </Router>
        
 
  <Footer></Footer>
  <MoviesGrid></MoviesGrid>
  <MoviesGrid1></MoviesGrid1>
  </div>
 
   
    
    
  );
}

export default App; 



