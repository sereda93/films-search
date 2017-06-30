import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Search from './components/Search/Search';
import Films from './components/Films/Films';
import sortFilms from './helpers/sort';
import './App.css';

class App extends Component {

	state = {
		search: '',
		isSearch: false,
		films: [],
		sortType: 'asc'
	};

	handleInputChange = event => {
		const inputValue = event.target.value;
		const isSearch = inputValue.length !== 0 ? true : false;

		this.setState({
			search: inputValue,
			isSearch: isSearch
		});

		if (isSearch) {
			this.fetchFilms(inputValue);
		} else {
			this.setState({films: []});
		}

	};

	fetchFilms = (search) => {
		const baseUrl = '//api.themoviedb.org/3/search/movie';
		const API_KEY = 'b46b3413bb75751f2fb4cd40324708a8';

		fetch(`${baseUrl}?api_key=${API_KEY}&query=${search}&page=1`)
				.then(response => response.json())
				.then(({results}) => {
					this.setState({
						films: results
					});
				})
				.catch(error => console.log(error));
	};

	// shouldComponentUpdate = (nextProps, nextState) => {
	// 	console.log(nextState);
	// 	return (this.state.films !== nextState.films);
	// };

	handleFilmsSort = (column) => {
		const sortType = this.state.sortType === 'asc' ? 'desc' : 'asc';

		this.setState({
			films: this.state.films.sort((a, b) => {
				return sortFilms(a, b, column, sortType);
			}),
			sortType: sortType
		});
	};

  render() {
		const isSearch = this.state.isSearch;

		return (
				<div className="container">
					<Search>
						<TextField
								fullWidth={true}
								hintText="Search films"
								onChange={this.handleInputChange}
						/>
					</Search>
					{isSearch &&
					<Films
							films={this.state.films}
							onClick={this.handleFilmsSort}
					/>}
				</div>
		);
  }
}

export default App;
