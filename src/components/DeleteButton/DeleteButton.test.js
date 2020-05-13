import React from 'react';
import { shallow } from 'enzyme';
import { DeleteButton } from "./DeleteButton";
import toJson from 'enzyme-to-json';

describe('<DeleteButton />', () => {
    it('should render <DeleteButton />', () => {
        const props = {
            deleteTask: jest.fn(),
            id: 0
        }
        const wrapper = shallow(<DeleteButton {...props} />)
        console.log(wrapper.debug())
    })

    it('calls deleteTask redux action creator on <sapn> click', () => {
        const props = {
            deleteTask: jest.fn(),
            id: 89757
        }
        const wrapper = shallow(<DeleteButton {...props} />)
        wrapper.find('span').simulate('click')
        expect(props.deleteTask).toHaveBeenCalledWith(89757)
    })

    it('matches snapshot', () => {
        const props = {
            deleteTask: jest.fn(),
            id: 0
        }
        const wrapper = shallow(<DeleteButton {...props} />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})