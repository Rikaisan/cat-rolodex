import { Component } from 'react';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			monsters: [],
		};
	}

	async componentDidMount() {
		let data = await fetch('https://jsonplaceholder.typicode.com/users');
		data = await data.json();
		this.setState({ monsters: data });
		console.log(data);
	}

	render() {
		return (
			<div className='App'>
				{this.state.monsters.map((monster) => (
					<div key={monster.id}>I am {monster.name}</div>
				))}
			</div>
		);
	}
}

export default App;
