import { 
	CHANGE_SEARCH_FIELD,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAILED
	 } from './constants.js'

import * as reducers from './reducers';

describe('searchRobots', () => {
	const initialStateSearch = {
		searchField: ''
	}
	it('should return the initial state', () => {
		expect(reducers.searchRobots(undefined,{})).toEqual({searchField:''})
	})
	it('should handle CHANGE_SEARCH_FIELD', () => {
		expect(reducers.searchRobots(initialStateSearch,{
			type: CHANGE_SEARCH_FIELD,
			payload: 'abc'
		})).toEqual({
			searchField: 'abc'
		})
	})
})

describe('requesRobots', () => {
  const initialStateRobots = {
		robots: [],
		isPending: false
	}

	it('should return the initial state', () => {
		expect(reducers.requestRobots(undefined,{})).toEqual(initialStateRobots)
	})

	it('shoud handle REQUEST_ROBOTS_PENDING action', () => {
		expect(reducers.requestRobots(initialStateRobots, {
			type: REQUEST_ROBOTS_PENDING,
		})).toEqual({
			robots: [],
			isPending: true
		})
	})

	it('shoud handle REQUEST_ROBOTS_SUCCESS action', () => {
		expect(reducers.requestRobots(initialStateRobots, {
			type: REQUEST_ROBOTS_SUCCESS,
			payload: [{
					id: '123',
					name: 'test',
					email: 'test@test.com'
				}]
		})).toEqual({
			robots: [{
				id: '123',
				name: 'test',
				email: 'test@test.com'
			}],
			isPending: false
		})
	})

	it('shoud handle REQUEST_ROBOTS_FAILED action', () => {
		expect(reducers.requestRobots(initialStateRobots, {
			type: REQUEST_ROBOTS_FAILED,
			payload: 'NOOOOOO'
		})).toEqual({
			error: 'NOOOOOO',
			robots: [],
			isPending: false
		})
	})
})