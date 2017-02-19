/* eslint-env  mocha */
import React from 'react';
import {expect} from 'chai';
import { shallow } from 'enzyme';

import About from '../../src/components/about';

describe('About', () => {
  it('renders the about page', () => {
    const wrapper = shallow(<About/>);
    expect(wrapper.find('h2')).to.have.length(1);
  });
});
