import React, { Component } from 'react';
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import Search from "./components/search/Search";
import MovieList from './components/MovieList';
import Pagination from './Pagination';
import MovieInfo from './components/MovieInfo';


class App extends Component {
  constructor() {
    super()
    this.state ={
      movies: [],
      searchTerm : '',
      totalResults : 0,
      currentPage : 1,
      currentMovie: null
    }
    this.apikey ="ad48cf28e5512e50dcddfb674d74d0d8"
  }

  handelSubmit = (e) => {
    e.preventDefault();
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apikey}&query=${this.state.searchTerm}`)
    .then(data => data.json())
    .then(data =>{
      console.log(data);
      this.setState({movies :[...data.results] , totalResults: data.total_results})
    })
  }

  handelChange = (e) => {
    this.setState( { searchTerm: e.target.value})
  }

  nextPage = (pageNumber) => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apikey}&query=${this.state.searchTerm}&page=${pageNumber}`)
    .then(data => data.json())
    .then(data =>{
      console.log(data);
      this.setState({movies :[...data.results] , currentPage: pageNumber})
    })
  }

  viewMovieInfo = (id) => {
    const filteredMovie = this.state.movies.filter(movie => movie.id == id)

    const newCurrentMovie = filteredMovie.length > 0 ? filteredMovie[0] : null ;
    this.setState( { currentMovie : newCurrentMovie}) 
  }

  closeMovieInfo =() => {
    this.setState({ currentMovie: null })
  }




  render() {
    const numberPages = Math.floor(this.state.totalResults / 20);
    return (
      <div className="App">
        <Navbar />

        {this.state.currentMovie == null ? <div><Search handelSubmit={this.handelSubmit} handelChange={this.handelChange}/><MovieList viewMovieInfo={this.viewMovieInfo}  movies={this.state.movies} /></div> : <MovieInfo currentMovie={this.state.currentMovie} closeMovieInfo={this.closeMovieInfo} /> }
        {this.state.totalResults > 20  && this.state.currentMovie == null ? <Pagination pages={numberPages} nextPage={this.nextPage} currentPage={this.state.currentPage} /> : '' }
      </div>
    )
  }
}

export default App;