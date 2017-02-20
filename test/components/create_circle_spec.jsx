/* eslint-env  mocha */
import React from 'react';
import {expect, assert} from 'chai';
import { shallow } from 'enzyme';
import {spy} from 'sinon';

import {unconnected_create_circle_component as CreateCircle} from '../../src/components/circle/create';
import CreateCircleForm from '../../src/components/circle/create/create_circle_form';
import CreateCircleInfoPanel from '../../src/components/circle/create/create_circle_info_panel';
import CreateCircleHeader from '../../src/components/circle/create/create_circle_header';

describe('CreateCircle Component', () => {
  describe('Root component', () => {
      const wrapper = shallow(<CreateCircle/>);
      it('renders the create circle component without errors', () => {
        expect(wrapper.find('.create-circle-component')).to.have.length(1);
      });
      it('renders the CreateCircleForm sub component', () => {
        expect(wrapper.find(CreateCircleForm)).to.have.length(1);
      });
      it('renders the CreateCircleInfoPanel sub component without errors', () => {
        expect(wrapper.find(CreateCircleInfoPanel)).to.have.length(1);
      });
      it('renders the CreateCircleHeader sub component without errors', () => {
        expect(wrapper.find(CreateCircleHeader)).to.have.length(1);
      });
  });

  describe('CreateCircleForm', () => {
    it('renders without errors', () => {
      const wrapper = shallow(<CreateCircleForm/>);
      expect(wrapper.find('form')).to.have.length(1);
    });

    it('Sets the hover hint on hover', () => {
      const set_hover_hint_to_section = section => () => section;
      const spied_set_hover_hint_to_section = spy(set_hover_hint_to_section);
      const wrapper = shallow(<CreateCircleForm set_hover_hint_to_section={spied_set_hover_hint_to_section}/>);
      assert.equal(spied_set_hover_hint_to_section.callCount, 14);
      wrapper.find('.form-group').first().simulate('mouseenter');
      wrapper.find('.form-group').first().simulate('mouseleave');
      assert.equal(spied_set_hover_hint_to_section.returnValues[0](), 'circle_name');
      assert.equal(spied_set_hover_hint_to_section.returnValues[1](), null);
    });
  });
});
