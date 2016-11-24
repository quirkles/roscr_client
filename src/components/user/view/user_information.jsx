import React from 'react';
import D from 'date-fp';


const user_information_component = ({user_to_display}) =>
  <div className='box user-information-component'>
    <div className='box-header red'>
      <h2 className='padding text-capitalize'>
        <div className='padding-right-one'>
          <img className="circle w-40 avatar" src={user_to_display.get('avatar_url')}></img>
        </div>
        <span>
          {user_to_display.get('firstname')} {user_to_display.get('lastname')}
        </span>
      </h2>
    </div>
    <div className='box-body'>
      <table className="table">
        <tbody>
          <tr>
            <td width='50%'>Email</td>
            <td className='font-weight-600'>{user_to_display.get('email_address')}</td>
          </tr>
          <tr>
            <td>Joined ROSCr</td>
            <td className='font-weight-600'>{D.format('YYYY-MM-DD', user_to_display.get('date_created'))}</td>
          </tr>
          <tr>
            <td>Trust Score</td>
            <td className='font-weight-600'>{user_to_display.get('trust_score')}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>;

export default user_information_component;
