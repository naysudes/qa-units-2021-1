import React from 'react'
import {sortByItemCount, getSortFunction, sortTypes, sortByDate, sortOrders} from './sortOrders';

describe('sortByItemCount function', () => {
	it('orders are null', () => {
		const result = sortByItemCount(null, null);
		expect(result).toEqual(0);
	});

	it('same items count', () => {
		const order1 = {
			items: ['item1', 'item2'],
		};

		const order2 = {
			items: ['1', '2'],
		};

		const result = sortByItemCount(order1, order2);

		expect(result).toBe(0);
	});

	it('no items', () => {
		const order3 = {noitems: "123"}
		const result = sortByItemCount(order3, order3);

		expect(result).toBe(0);
	});

	it('wrong type', () => {
		const order3 = {items: "123"}
		const result = sortByItemCount(order3, 1);

		expect(result).toBe(0);
	});
});

describe('sortType function', () => {
	it('sortByDate', () => {
		const result = getSortFunction(sortTypes.DATE);
		expect(result).toBe(sortByDate);
	});

	it('sortByItemCount', () => {
		const result = getSortFunction(sortTypes.COUNT);
		expect(result).toBe(sortByItemCount);
	});
});

describe('sortByDate function', () => {
	it('orders are null', () => {
		const result = sortByDate(null, null);
		expect(result).toEqual(0);
	});

	it('wrong type', () => {
		const order1 = {
			items: ['item1', 'item2'],
		};
		const result = sortByDate(order1, 1);
		expect(result).toBe(0);
	});

	it('first order', () => {
		const order1 = {date: 5};
	    const order2 = {date: 10};
		const result = sortByDate(order2, order1);
		expect(result).toBe(-1);
	});

	it('second order', () => {
		const order1 = {date: 5};
	    const order2 = {date: 10};
		const result = sortByDate(order1, order2);
		expect(result).toBe(1);
	});

	it('equals', () => {
		const order1 = {date: 5};
		const result = sortByDate(order1, order1);
		expect(result).toBe(0);
	});

	it('no date', () => {
		const order1 = {date: 5};
		const order3 = {nodate: 1}
		const result = sortByDate(order3, order1);
		expect(result).toBe(0);
	});
});

