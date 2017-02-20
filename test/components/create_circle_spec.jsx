/* eslint-env  mocha */
import React from 'react';
import {expect} from 'chai';
import { shallow } from 'enzyme';
import {stub, spy} from 'sinon';
import {Map} from 'immutable';

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

    it('correctly renders circle information', () => {
      const now = Date.now;
      const new_circle = Map({
        circle_name: 'test-circle-name',
        participant_count: 10,
        withdrawal_amount: 500,
        cycle_period: 'bi-weekly',
        start_date: now
      });
      const wrapper = shallow(<CreateCircleForm new_circle={new_circle}/>);
      expect(wrapper.find('input[name="circle_name"]').props().value).to.equal('test-circle-name');
      expect(wrapper.find('input[name="participant_count"]').props().value).to.equal(10);
      expect(wrapper.find('input[name="withdrawal_amount"]').props().value).to.equal(500);
      expect(wrapper.find('input[name="cycle_period"]').props().value).to.equal('bi-weekly');
      expect(wrapper.find('input[name="start_date"]').props().value).to.equal(now);
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

    it('Fires both mark_as_submitted and do_attempt_create_circle prop funcson submission', () => {
      const mark_new_circle_as_submitted = spy();
      const do_attempt_create_circle = spy();
      const new_circle = Map({circle_name: 'Circle name'});
      const wrapper = shallow(
        <CreateCircleForm
          new_circle={new_circle}
          mark_new_circle_as_submitted={mark_new_circle_as_submitted}
          do_attempt_create_circle={do_attempt_create_circle}
        />);
      wrapper.find('button').simulate('click', {preventDefault: () => {}});
      expect(mark_new_circle_as_submitted.calledOnce).to.be.true;
      expect(do_attempt_create_circle.calledOnce).to.be.true;
    });
  });
});
