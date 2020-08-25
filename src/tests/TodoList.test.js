import React from 'react';
import { shallow,mount } from 'enzyme';
import TodoList from '../components/TodoList'

test('should test TodoList component', () => {
 const wrapper = shallow(<TodoList/>);
 expect(wrapper).toMatchSnapshot();
});
test('should call handleAddTodo method', () => {
    const wrapper = shallow(<TodoList />);
    const instance = wrapper.instance();
    const value = 'Publish Article';
    instance.handleAddTodo({
     preventDefault: () => {},
     target: {
      todo: {
        value
       }
      }
    });
   });

   describe('<TodoList />', () => {
    it('calls componentDidMount', () => {
      const spy = jest.spyOn(TodoList.prototype, 'componentDidMount');
      const wrapper = mount(<TodoList />);
      expect(spy).toHaveBeenCalled();
      spy.mockReset();
      spy.mockRestore();
    });
  });