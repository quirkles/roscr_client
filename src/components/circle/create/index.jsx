import React from 'react';

export default () =>

<div className='row'>
  <div className='col-sm-12'>
    <form data-ui-jp='parsley' novalidate=''>
      <div className='box'>
        <div className='box-header'>
          <h2>Create Circle</h2>
        </div>
        <div className='box-body'>
          <p className='text-muted'>Enter Circle Data</p>
          <div className='form-group'>
            <label>Circle Name</label>
            <input
              type='text'
              className='form-control'
              placeholder='My New Circle'
            />
          </div>
          <div className='form-group'>
            <label>Particpant Count</label>
            <select
              className='form-control'
            >
              {Array
                .from({length: 9}, (v, k) => k + 4)
                .map((v) =>
                  <option
                    key={v}
                    value={v}
                  >{v}</option>
              )}
            </select>
          </div>
          <div className='form-group'>
            <label className='control-label'>Desired withdrawal value</label>
            <input
              type='number'
              className='form-control'
              placeholder='$100'
              step='10'
            />
          </div>
          <div className='form-group'>
            <label className='control-label'>Savings cycle length</label>
            <select
              className='form-control'
            >
              <option disabled selected>-- Select Cycle Length --</option>
              <option value='weekly'>Weekly</option>
              <option value='bi-weekly'>Bi-Weekly</option>
              <option value='monthly'>Monthly</option>
            </select>
          </div>
          <div className='form-group'>
            <label className='control-label'>Start date</label>
            <input
              type='date'
              className='form-control'
            />
          </div>
          <div className='form-group'>
            <label className='control-label'>Contribution amount (per user per cycle)</label>
            <input
              type='text'
              readOnly
              className='form-control'
            />
          </div>
          <div className='button-list'>
            <button className='btn btn-primary w-sm'>Submit</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</div>;
