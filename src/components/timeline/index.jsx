import React from 'react';
import {connect} from 'react-redux';

import {parse_timeline_item} from '../../utils/timeline';
import './timeline_Styles.scss';

const unconnected_timeline_component = ({
  timeline_items
}) =>
  <ul className='timeline timeline-center'>
    <li className='tl-header'>
      <div>
        <i className='fa fa-2x fa-angle-double-down text-warn'></i>
      </div>
    </li>
    {timeline_items.map(parse_timeline_item).map((item, index) =>
      <li key={index} className='tl-item tl-left'>
        <div className='tl-wrap b-warn'>
          <span className='tl-date text-muted'>{item.date}</span>
          <div className='tl-content box-color text-color p-a-sm'>
            <span className='arrow b-white left pull-up hidden-left'></span>
            <span className='arrow b-white right pull-up visible-left'></span>
            <div className='text-lt'>{item.text}</div>
          </div>
        </div>
      </li>
    )}
    <li className='tl-header'>
      <div>
        <i className='fa fa-2x fa-angle-double-down text-warn'></i>
      </div>
    </li>
  </ul>;

const connected_timeline_component = connect()(unconnected_timeline_component);

export default connected_timeline_component;
