import React from 'react'
import './WidegetSM.css'
import tigi from '../../assets/tigi.jpg'
import {Visibility} from '@mui/icons-material';
const WidegetSm = () => {
  return (
    <div className='widegetSm'>
      <span className="widegetSmTitle">New Join Members</span>
      <ul className="widegetSmList">
        <li className="widegetSmListItem">
          <img src={tigi} alt="" className="widegetSmImg" />
          <div className="widegetSmUser">
            <span className="widegetSmUsername">Tigistu Yohannis</span>
            <span className="widegetSmUserTitle">Computer Engineer</span>
          </div>
          <button className="widegetSmButton">
            <Visibility className='widegetSmIcon'  />Display
          </button>
        </li>
        <li className="widegetSmListItem">
          <img src={tigi} alt="" className="widegetSmImg" />
          <div className="widegetSmUser">
            <span className="widegetSmUsername">Tigistu Yohannis</span>
            <span className="widegetSmUserTitle">Computer Engineer</span>
          </div>
          <button className="widegetSmButton">
            <Visibility className='widegetSmIcon' />Display
          </button>
        </li>
        <li className="widegetSmListItem">
          <img src={tigi} alt="" className="widegetSmImg" />
          <div className="widegetSmUser">
            <span className="widegetSmUsername">Tigistu Yohannis</span>
            <span className="widegetSmUserTitle">Computer Engineer</span>
          </div>
          <button className="widegetSmButton">
            <Visibility className='widegetSmIcon'  />Display
          </button>
        </li>
        <li className="widegetSmListItem">
          <img src={tigi} alt="" className="widegetSmImg" />
          <div className="widegetSmUser">
            <span className="widegetSmUsername">Tigistu Yohannis</span>
            <span className="widegetSmUserTitle">Computer Engineer</span>
          </div>
          <button className="widegetSmButton">
            <Visibility className='widegetSmIcon'  />Display
          </button>
        </li>
        <li className="widegetSmListItem">
          <img src={tigi} alt="" className="widegetSmImg" />
          <div className="widegetSmUser">
            <span className="widegetSmUsername">Tigistu Yohannis</span>
            <span className="widegetSmUserTitle">Computer Engineer</span>
          </div>
          <button className="widegetSmButton">
            <Visibility className='widegetSmIcon'  />Display
          </button>
        </li>
      </ul>
    </div>
  )
}

export default WidegetSm
