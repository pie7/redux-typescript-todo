import React from 'react';
import { shallow } from 'enzyme';
import { Navigation } from "./Navigation";

describe('<Navigation />', () => {

    it('should  render <Navigation />', () => {
        const props = {
            tabs: [
                {
                    path: '/all',
                    title: 'all'
                }
            ]
        }
        const wrapper = shallow(<Navigation {...props} />)
        console.log(wrapper.debug());
    })
})