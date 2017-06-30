import React, { Component } from 'react'
import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import Chip from 'material-ui/Chip';
import Divider from 'material-ui/Divider';
import './Movie.css'

class Movie extends Component {

	state = {
		movieId: NaN,
		movie: [],
		tags: []
	};

	fetchMovie = (id) => {
		const baseUrl = 'http://api.themoviedb.org/3/movie';
		const API_KEY = 'b46b3413bb75751f2fb4cd40324708a8';
		const urls = [
			`${baseUrl}/${id}?api_key=${API_KEY}`,
			`${baseUrl}/${id}/keywords?api_key=${API_KEY}`
		];
		const promises = urls.map(url => fetch(url).then(response => response.json()));

		Promise.all(promises)
				.then(results => {
					this.setState({
						movieId: id,
						movie: results[0],
						tags: results[1].keywords
					});
					console.log(results);
				}).catch(error => console.log(error));
	};

	componentWillMount() {
		this.fetchMovie(this.props.match.params.id);
	}

	shouldComponentUpdate(nextProps, nextState) {
		return nextState.movieId !== this.state.movieId;
	}

	componentWillReceiveProps(nextProps) {
		this.fetchMovie(nextProps.match.params.id);
	}

	render() {

		const style = {
			chip: {
				margin: 4
			},
			cartMediaStyle: {
				maxWidth: '300px'
			},
			dividerStyle: {
				marginTop: '20px',
				marginBottom: '20px'
			}
		};

		return (
				<div className="container">
					<Card>
						<div className="card-container">
							<div className="card-left">
								<CardMedia
										mediaStyle={style.cartMediaStyle}
								>
									{this.state.movie.poster_path &&
										(
												<img
													src={`http://image.tmdb.org/t/p/w500${this.state.movie.poster_path}`}
													alt=""
												/>
										)
									}
								</CardMedia>
							</div>
							<div className="card-right">
								<CardTitle
										title={this.state.movie.title}
										subtitle={`Release date: ${this.state.movie.release_date}`}
								/>
								<CardText>
									{this.state.movie.overview}
									<Divider style={style.dividerStyle} />
									<div className="chipWrapper">
									{[ ...this.state.tags ].map(tag => (
											<Chip key={tag.id} style={style.chip}>
												{tag.name}
											</Chip>
									))}
									</div>
								</CardText>
							</div>
						</div>
					</Card>
				</div>
		);
	}
}

export default Movie;
