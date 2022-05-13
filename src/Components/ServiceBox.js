import React from 'react'

export default function ServiceBox({header , content , price}) {
  return (
    <div className='service_box'>
      <h1>Premium</h1>
      <p>An initial of your company will be added in our description page.</p>
      <div>
          <p>5000</p>
          <button>See Details</button>
      </div>
    </div>
  );
}
