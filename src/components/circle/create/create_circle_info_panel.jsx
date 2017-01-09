import React from 'react';
import classnames from 'classnames';

export default ({
  hover_hint
}) =>
<div className='box create-circle-info-panel'>
  <div className='box-header pink'>
    <h2 className='panel-title padding-half'>
      <i className='fa fa-info-circle padding-right-one'></i>
      Creating A Circle
    </h2>
  </div>
  <div className='box-body'>
    <p>Use this form to create a new savings circle, after you've created the circle, you will be added to it and, as the chircle chair will be able to add more users to it.</p>
    <div
      className={classnames(
        'padding-half',
        {'indigo-50': hover_hint === 'circle_name'}
      )}
    >
      <h5 className='text-info font-bold'>Circle Name</h5>
      <p>Just a simple identifier for the circle.</p>
    </div>
    <div
      className={classnames(
        'padding-half',
        {'indigo-50': hover_hint === 'participant_count'}
      )}
    >
      <h5 className='text-info font-bold'>Participant Count</h5>
      <p>The number of people, including yourself, that you want to be in this circle. Circles must have at least four, but no more than twelve participants.</p>
    </div>
    <div
      className={classnames(
        'padding-half',
        {'indigo-50': hover_hint === 'withdrawal_amount'}
      )}
    >
      <h5 className='text-info font-bold'>Desired Withdrawal Value</h5>
      <p>The dollar amount you wish to the circle to pay out at the ned of each savings cycle.</p>
    </div>
    <div
      className={classnames(
        'padding-half',
        {'indigo-50': hover_hint === 'cycle_period'}
      )}
    >
      <h5 className='text-info font-bold'>Savings Cycle Length</h5>
      <p>The period of time between each payout event.</p>
    </div>
    <div
      className={classnames(
        'padding-half',
        {'indigo-50': hover_hint === 'start_date'}
      )}
    >
      <h5 className='text-info font-bold'>Start Date</h5>
      <p>The date at which the circle will start.</p>
    </div>
    <div
      className={classnames(
        'padding-half',
        {'indigo-50': hover_hint === 'is_public'}
      )}
    >
      <h5 className='text-info font-bold'>Create Circle Public</h5>
      <p>Circles are either public or private, anyone can see public circles, only you will see private circles. If this is checked then this circle will be public upon creation.</p>
    </div>
    <div
      className={classnames(
        'padding-half',
        {'indigo-50': hover_hint === 'contribution_amount'}
      )}
    >
      <h5 className='text-info font-bold'>Contribution amount</h5>
      <p>The dollar amount that each circle member is required ot pay into the circle each savings cycle. This is calcualted from the withdrawal value and number of participants, it includes the ROSCr fees.</p>
    </div>
  </div>
</div>;
