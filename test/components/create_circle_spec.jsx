/* eslint-env  mocha */
import React from 'react';
import {expect} from 'chai';
import { shallow } from 'enzyme';
import {stub, spy} from 'sinon';

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
      shallow(<CreateCircleForm set_hover_hint_to_section={spied_set_hover_hint_to_section}/>);
      expect(spied_set_hover_hint_to_section.callCount).to.equal(14);
      expect(spied_set_hover_hint_to_section.returnValues[0]()).to.equal('circle_name');
      expect(spied_set_hover_hint_to_section.returnValues[1]()).to.equal(null);
    });

    it('Fires an edit_circle prop function on changing the start date', () => {
      const edit_circle = spy();
      const wrapper = shallow(<CreateCircleForm edit_circle={edit_circle}/>);
      wrapper.find('input[type="date"]').first().simulate('change', {target: {value: true}});
      expect(edit_circle.calledOnce).to.be.true;
    });

    it('Fires an edit_circle_attr prop function on changing the circle name', () => {
      const edit_circle_attr = attr_name => () => attr_name;
      const spied_edit_circle_attr = spy(edit_circle_attr);
      shallow(<CreateCircleForm edit_circle_attr={spied_edit_circle_attr}/>);
      expect(spied_edit_circle_attr.callCount).to.equal(5);
      expect(spied_edit_circle_attr.returnValues[0]()).to.equal('circle_name');
    });
  });
});
