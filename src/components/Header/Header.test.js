import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Header from "./Header";

describe('<Header />', () => {

    it('should render <Header />', () => {
        const props = {
            title: ''
        }
        const wrapper = shallow(<Header {...props} />)
        console.log(wrapper.debug());
    })

    it('should contain 1 header el', () => {
        const props = {
            title: ''
        }
        const wrapper = shallow(<Header {...props} />)
        expect(wrapper.find('header').length)
            .toBe(1)
    })

    it('should render title from props', () => {
        const props = {
            title: 'ophelia'
        }
        const wrapper = shallow(<Header {...props} />)
        expect(wrapper.find('header').text())
            .toBe('ophelia')
    })

    it('matches the snapshot', () => {
        const props = {
            title: ''
        }
        const tree = shallow(<Header {...props} />)
        expect(toJson(tree)).toMatchSnapshot()
    })

})