/* eslint-env mocha */

import React from 'react';
import {fromJS} from 'immutable';
import { shallow } from 'enzyme';
import {expect} from 'chai';

import {unconnected_todos_component as Todos} from '../components/todos';

describe('Todos component wrapper', () => {
  it('Contains the .todo-app div', () => {
    const component = shallow(
        <Todos
        todos = {fromJS({
          new_todo: {}
        })}
      />
    );
    expect(component.find('div.todo-app').length).to.equal(1);
  });
});
