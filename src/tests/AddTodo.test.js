import React from 'react';
import { shallow } from 'enzyme';

import AddTodo from '../components/AddTodo'
test('should test AddTodo component', () => {
 const wrapper = shallow(<AddTodo/>);
 expect(wrapper).toMatchSnapshot();
});
test('should test addTodo function call', () => {
    const OnSubmitSpy = jest.fn();

    const wrapper = shallow(<AddTodo handleAddTodo={OnSubmitSpy} />);
    expect(wrapper).toMatchSnapshot();
    const container = wrapper.find('Form');
    expect(container.length).toEqual(1);
    console.log(container.debug());
    container.simulate('submit');
    expect(OnSubmitSpy).toHaveBeenCalled()
   });