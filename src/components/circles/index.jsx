import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

const unconnected_circles_component = ({circles}) =>
<div className='padding'>
  <div className='row'>
    {circles.map((circle, circle_id) =>
      <div
        key={circle_id}
        className='col-sm-4'
      >
      <div className='box'>
        <div className='box-header warn'>
          <h3>{circle.get('circle_name')}</h3>
        </div>
        <div className='box-body light lt'>
          <p className='m-a-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id neque quam. Aliquam-a-0 m-b-smitudin egestas dui nec, fermentum diam. Vivamus vel tincidunt libero, vitae elementu</p>
        </div>
      </div>
    </div>
    )}
  </div>
</div>;

const map_state_to_props = ({circles}) => ({circles});

export default connect(map_state_to_props)(unconnected_circles_component);
