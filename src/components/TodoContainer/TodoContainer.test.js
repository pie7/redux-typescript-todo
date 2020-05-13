import React from 'react';
import { shallow } from 'enzyme';
import { TodoContainer } from './TodoContainer';

describe('<TodoContainer />', () => {
    it('should render TodoContainer', () => {
        const props = {
            todos: [
                {
                    "id": 1,
                    "title": "Pay Your Taxes",
                    "context": "Do It Now",
                    "isComplete": false
                },
                {
                    "id": 2,
                    "title": "Coming Home",
                    "context": "I'm coming home I'm coming home",
                    "isComplete": true
                }
            ]
        }
        const wrapper = shallow(<TodoContainer {...props} />)
        console.log(wrapper.debug());
    })

    it('should ul has children elements', () => {
        const props = {
            todos: [
                {
                    "id": 1,
                    "title": "Pay Your Taxes",
                    "context": "Do It Now",
                    "isComplete": false
                },
                {
                    "id": 2,
                    "title": "Coming Home",
                    "context": "I'm coming home I'm coming home",
                    "isComplete": true
                }
            ]
        }
        const wrapper = shallow(<TodoContainer {...props} />)
        expect(wrapper.find('Connect(TodoCard)').length)
            .toBe(2)
    })
})