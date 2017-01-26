import React from 'react';
import {format} from 'date-fp';

const welcome_notification_component = ({notification}) =>
  <li
    className="list-group-item dark-white box-shadow-z0 b"
    onClick={e => e.preventDefault()}
  >
    <span className="pull-left m-r">
      <i className="fa fa-2x fa-smile-o text-accent"/>
    </span>
    <span className="clear block">
      Welcome to ROSCr!
      <br/>
      <small className="text-muted italic"> {format('MMMM D YYYY', new Date(notification.get('date')))}</small>
      </span>
  </li>;

export default welcome_notification_component;
