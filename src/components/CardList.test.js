import { shallow } from 'enzyme';
import React from 'react';
import CardList from './CardList';

it('expect to render CardList Component', () => {
	const mcokRobots = [
		{
			id: 1,
			name: 'John Snow', 
			username: 'JohJon',
			email: 'john@gmail.com'
		}
	]
	expect(shallow(<CardList robots={mcokRobots} />)).toMatchSnapshot();
})