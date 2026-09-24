import React from 'react'
import './card.css'
export default function Demo2() {
  return (
    <div  class="card">
        <h3>Card Demo</h3>
        <div className="card-img-wrapper">

        <img src="https://i.pravatar.cc/90" alt="profile" className='card-img'/>
        </div>
        <div className='card-info'>
            <h2>Harthiek</h2>
            <p>2nd year btech</p>
        </div>
    </div>
  )
}
