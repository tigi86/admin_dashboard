import React from 'react'
import './Topbar.css'
import {NotificationsNone, Language, Settings} from '@mui/icons-material';
import tigi from '../../assets/tigi.jpg'
const Topbar = () => {
  return (
    <div className='topbar'>
      <div className="topbarwrapper">
        <div className="topLeft">
            <span className='logo'>TIgiCode</span>
        </div>
        <div className="topRight">
            <div className="topbarIcons">
                <NotificationsNone/>
                <span className='topIconBag'>2</span>
            </div>
            <div className="topbarIcons">
                <Language />
                <span className='topIconBag'>2</span>
            </div>
            <div className="topbarIcons">
                <Settings />
               
            </div>
            <img className='topAvatar'  src={tigi} alt=''/>
        </div>
      </div>
    </div>
  )
}

export default Topbar
