import React from 'react';
import { shallow } from 'enzyme';
import TodoLists from '../components/TodoLists';
import { textSpanContainsPosition, isExportDeclaration } from 'typescript';
test("test todolist with empty Array",()=>{
    const wrapper = shallow(<TodoLists todos={[]}/>);
    expect(wrapper).toMatchSnapshot();
});
test('should test TodoLists component with list of todos', () => {
    const wrapper = shallow(
     <TodoLists todos={['Read Newspaper', 'Publish Article']} />
    );
    expect(wrapper).toMatchSnapshot();
   });