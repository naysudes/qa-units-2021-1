import React from 'react'
import {configure, shallow} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import Order from "./Order";
import {getDate} from '../utils/getDate';
import {fakeOrders} from "../data/fakeOrders";
import toJson from "enzyme-to-json";


jest.mock('../utils/getDate')
configure({adapter: new Adapter()});


describe('Order.js', () => {

    afterAll(() => {
        getDate.mockReset();
    });
    beforeEach(() => {
        getDate.mockClear();
        getDate.mockReturnValue(123);
    });

    it('no params', () => {
        const wrapper = shallow(<Order order={{}}/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    
    it('empty', () => {
        const wrapper = shallow(<Order/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('only data', () => {
        let order = Object.assign({}, fakeOrders[0]);
        delete order.items;
        delete order.shop;
        const wrapper = shallow(<Order order={order}/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('data and items', () => {
        const wrapper = shallow(<Order order={fakeOrders[0]}/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('order without date', () => {
    let order = Object.assign({}, fakeOrders[0]);
    delete order.date;
    const wrapper = shallow(<Order order={order}/>);
    expect(wrapper.getElement()).toBeNull();
  });

});