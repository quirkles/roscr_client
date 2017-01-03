import React from 'react';

export default ({do_close_modal}) =>
<div
    style={{height: '96px'}}
>
    <div
      className = 'modal-close-box bg-danger'
      onClick = {do_close_modal}
    ></div>
</div>;
