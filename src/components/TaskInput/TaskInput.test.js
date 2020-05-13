import React from 'react';
import { shallow } from 'enzyme';
import { TaskInput } from "./TaskInput";

describe('<TaskInput />', () => {
    it('should render <TaskInput />', () => {
        const props = {
            currentInput: 'StrengthAndHonor',
            keyinInput: jest.fn(),
            addTask: jest.fn()
        }
        const wrapper = shallow(<TaskInput {...props} />)
        console.log(wrapper.debug());
    })

    it('calls addTask redux action creator on <input> keydown', () => {
        const props = {
            currentInput: 'StrengthAndHonor',
            keyinInput: jest.fn(),
            addTask: jest.fn()
        }
        const wrapper = shallow(<TaskInput {...props} />)

        wrapper.find('input').simulate('keydown', { key: 'Enter' })
        expect(props.addTask).toHaveBeenCalledWith({ key: 'Enter' }, 'StrengthAndHonor')
    })

    it('calls keyinInput redux action creator on <input> change', () => {
        const props = {
            currentInput: '',
            keyinInput: jest.fn(),
            addTask: jest.fn()
        }
        const wrapper = shallow(<TaskInput {...props} />)

        wrapper.find('input').simulate('change', 'WarpTen...')
        expect(props.keyinInput).toHaveBeenCalledWith('WarpTen...')
    })
})