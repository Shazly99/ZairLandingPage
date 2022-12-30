import React from 'react'
import Icons from '../../constants/Icons'

function PlanCard({ active }) {
  return (
    <>
      <div className={`app__planCard ${active}`}>
        <h3>Basic Plan</h3>
        <p className=' text-left'>20 $ /month</p>
        <div className="app__planCard-list">
          <ul >
            <li> <Icons.check size={18} /> <p>Access to all basic feature</p></li>
            <li> <Icons.check size={18} /> <p>100 Integrations</p></li>
            <li> <Icons.check size={18} /> <p>Up to 10 individual users</p></li>
            <li> <Icons.check size={18} /> <p>20 GB data for each user</p></li>
            <li> <Icons.check size={18} /> <p>10 Work Flow</p></li>
            <li> <Icons.check size={18} /> <p>Access to all basic feature</p></li> 
            <button>Choose The Plan</button>
          </ul>
        </div>
      </div>
    </>
  )
}

export default PlanCard