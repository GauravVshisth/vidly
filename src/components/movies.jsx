import React, { Component } from "react";
import { paginate } from "../utils/paginate";
import { getMovies } from "../services/fakeMovies";
import { getGenres } from "../services/fakeGenre";
import Like from "./common/like";
import Pagination from "./common/pagination";
import ListGroup from "./common/listgroup";
import MoviesTable from "./movies-table";
class Movie extends Component {
  state = {
    movies: getMovies(),
    genres: getGenres(),
    pageSize: 3,
    currentPage: 1,
  };
  handleDelete = (movie) => {
    console.log(movie);
    let movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies: movies });
  };
  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movie };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };
  handleItemSelection = (genre) => {
    console.log(genre);
    this.setState({ selectedItem: genre });
  };

  render() {
    const { length: count } = this.state.movies;
    const {
      movies: allmovies,
      pageSize,
      currentPage,
      genres,
      selectedItem,
    } = this.state;
    const filtered = selectedItem
      ? allmovies.filter((m) => m.genre.name === selectedItem.name)
      : allmovies;
    const movies = [...paginate(filtered, currentPage, pageSize)];

    if (count === 0) return <p>there are no movies in the database</p>;
    return (
      <div className="row">
        <div className="col-2">
          <ListGroup
            items={genres}
            onItemSelect={this.handleItemSelection}
            selectedItem={selectedItem}
          />
        </div>
        <span className="col">
          {" "}
          <p>Showing {filtered.length} movies in the database</p>
          <MoviesTable
            movies={movies}
            onDelete={this.handleDelete}
            onLike={this.handleLike}
          />
          <Pagination
            itemsCount={filtered.length}
            pageSize={pageSize}
            onClick={this.handlePageChange}
            currentPage={currentPage}
          />
        </span>
      </div>
    );
  }
}

export default Movie;
