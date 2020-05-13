import React from 'react';
import { shallow } from 'enzyme';
import { TodoCard } from "./TodoCard";

describe('<TodoCard />', () => {

    it('should  render <TodoCard />', () => {
        const props = {
            id: 0,
            title: '',
            isComplete: false,
            toggleTask: jest.fn()
        }
        const wrapper = shallow(<TodoCard {...props} />)
        console.log(wrapper.debug());
    })

    it('calls toggleTask redux action creator on <input> change', () => {
        const props = {
            id: 2048,
            title: '',
            isComplete: false,
            toggleTask: jest.fn()
        }
        const wrapper = shallow(<TodoCard {...props} />)

        wrapper.find('input').simulate('change')
        expect(props.toggleTask).toHaveBeenCalledWith(2048, false)
    })
})