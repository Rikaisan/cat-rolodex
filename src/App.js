import { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			monsters: [],
			searchField: '',
		};
	}

	async componentDidMount() {
		let data = await fetch('https://jsonplaceholder.typicode.com/users');
		data = await data.json();
		this.setState({ monsters: data });
	}

	updateSearchField = (event) =>
		this.setState({ searchField: event.target.value });

	render() {
		return (
			<div className='App'>
				<h1>Cat Rolodex</h1>
				<SearchBox
					placeholder='Search cats...'
					changeHandler={this.updateSearchField}
				/>
				{(this.state.monsters.length > 0 && (
					<CardList
						monsters={this.state.monsters}
						searchFilter={this.state.searchField}
					/>
				)) || <h1>Loading...</h1>}
			</div>
		);
	}
}

export default App;
