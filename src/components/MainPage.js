import React, { Component } from 'react';
import CardList from './CardList.js';
import SearchBox from './SearchBox.js';
import Scroll from './Scroll.js';
import ErrorBoundry from './ErrorBoundry';
import Header from './Header';

class MainPage extends Component {
		
	componentDidMount(){
		this.props.onRequestRobots();
	}	

	render() {
		const { searchField, onSearchChange, robots, isPending } = this.props;
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase())
		});
		return (
				<div className="tc">
					<Header />
					<SearchBox 
						searchChange={onSearchChange}
					/> 
					<Scroll>
					{	isPending ? <h1>Loading</h1> :
					<ErrorBoundry>
						<CardList robots={filteredRobots}/>
					</ErrorBoundry>
					}
					</Scroll>
				</div>
			);
		}
}


export default MainPage;