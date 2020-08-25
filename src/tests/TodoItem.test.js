import React from 'react';
import { shallow } from 'enzyme';

import TodoItem from '../components/TodoItem'
import { textSpanContainsPosition } from 'typescript';
test("test todoitem component",()=>{
    const wrapper = shallow(<TodoItem />);
    expect(wrapper).toMatchSnapshot();
});
test("test todoitem component",()=>{
    const wrapper = shallow(<TodoItem todo = "read"/>);
    expect(wrapper).toMatchSnapshot();
});