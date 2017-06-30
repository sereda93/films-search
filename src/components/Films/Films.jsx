import React, { Component } from 'react';
import {
	Table,
	TableBody,
	TableHeader,
	TableHeaderColumn,
	TableRow,
	TableRowColumn,
} from 'material-ui/Table';
import {
	Link
} from 'react-router-dom'
import {teal400} from 'material-ui/styles/colors';
import ActionSwapVert from 'material-ui/svg-icons/action/swap-vert';
import './Films.css'

class Films extends Component {

	render() {

		return (
				<Table
						height='300px'
				>
					<TableHeader
							displaySelectAll={false}
							enableSelectAll={false}
							adjustForCheckbox={false}
					>
						<TableRow>
							<TableHeaderColumn>ID
								<div className="sort-button" onClick={() => this.props.onClick('id')}>
									<ActionSwapVert viewBox="0 0 30 30" color={teal400} />
								</div>
							</TableHeaderColumn>
							<TableHeaderColumn>Title
								<div className="sort-button" onClick={() => this.props.onClick('title')}>
									<ActionSwapVert viewBox="0 0 30 30" color={teal400} />
								</div>
							</TableHeaderColumn>
							<TableHeaderColumn>Language
								<div className="sort-button" onClick={() => this.props.onClick('original_language')}>
									<ActionSwapVert viewBox="0 0 30 30" color={teal400} />
								</div>
							</TableHeaderColumn>
							<TableHeaderColumn>Popularity Index
								<div className="sort-button" onClick={() => this.props.onClick('popularity')}>
									<ActionSwapVert viewBox="0 0 30 30" color={teal400} />
								</div>
							</TableHeaderColumn>
							<TableHeaderColumn>Votes Count
								<div className="sort-button" onClick={() => this.props.onClick('vote_count')}>
									<ActionSwapVert viewBox="0 0 30 30" color={teal400} />
								</div>
							</TableHeaderColumn>
							<TableHeaderColumn>Rating
								<div className="sort-button" onClick={() => this.props.onClick('vote_average')}>
									<ActionSwapVert viewBox="0 0 30 30" color={teal400} />
								</div>
							</TableHeaderColumn>
							<TableHeaderColumn>Release Date
								<div className="sort-button" onClick={() => this.props.onClick('release_date')}>
									<ActionSwapVert viewBox="0 0 30 30" color={teal400} />
								</div>
							</TableHeaderColumn>
						</TableRow>
					</TableHeader>
					<TableBody
							displayRowCheckbox={false}
					>
						{this.props.films.map( (film, index) => (
								<TableRow key={index}>
									<TableRowColumn>{film.id}</TableRowColumn>
									<TableRowColumn>
										<Link to={`/${film.id}`}>
										{film.title}
										</Link>
									</TableRowColumn>
									<TableRowColumn>{film.original_language}</TableRowColumn>
									<TableRowColumn>{film.popularity}</TableRowColumn>
									<TableRowColumn>{film.vote_count}</TableRowColumn>
									<TableRowColumn>{film.vote_average}</TableRowColumn>
									<TableRowColumn>{film.release_date}</TableRowColumn>
								</TableRow>
						) )}
					</TableBody>
				</Table>
		);

	}

}

export default Films;