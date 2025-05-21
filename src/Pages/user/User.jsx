import React from 'react'
import './User.css'
import tigi from '../../assets/tigi.jpg'
import {CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish} from '@mui/icons-material';
import { Link } from 'react-router-dom';
const User = () => {
  return (
    <div className='user'>
       <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link className='link' to="/newUser" >
         <button className="userAddButton">Create</button>
        </Link>
       
       </div>
       <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img src={tigi} alt="tigi" className='userShowImg' />
            <div className="userShowTopTitle">
              <span className="userShowUsername">Tigistu Yohannis</span>
              <span className="userShowTitle">Computer Engineer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowBotttomTitle">Account Details</span> 
            <div className="userShowInfo">
            <PermIdentity className='userShowIcon'/>
            <span className="userShowInfoTitle">Tigistu86</span>
            </div>
            <div className="userShowInfo">
            <CalendarToday className='userShowIcon'/>
            <span className="userShowInfoTitle">10/12/2002</span>
            </div>
            <span className="userShowBotttomTitle">Contact Details</span> 
            <div className="userShowInfo">
            <PhoneAndroid className='userShowIcon'/>
            <span className="userShowInfoTitle">+251986121480</span>
            </div>
            <div className="userShowInfo">
            <MailOutline className='userShowIcon'/>
            <span className="userShowInfoTitle">tigistuyohannes86@gmail.com</span>
            </div>
            <div className="userShowInfo">
            <LocationSearching className='userShowIcon'/>
            <span className="userShowInfoTitle">Hossana | Ethiopia</span>
            </div>
            
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpadteItem">
                <label>Username</label>
                <input type="text" placeholder="Tigistu86" className='userUpdateInput' />
              </div>
              <div className="userUpadteItem">
                <label>Full Name</label>
                <input type="text" placeholder="Tigistu Yohannis" className='userUpdateInput' />
              </div>
              <div className="userUpadteItem">
                <label>Email</label>
                <input type="email" placeholder="tigistuyohannes86@gmail.com" className='userUpdateInput' />
              </div>
              <div className="userUpadteItem">
                <label>Phone</label>
                <input type="text" placeholder="+251986121480" className='userUpdateInput' />
              </div>
              <div className="userUpadteItem">
                <label>Address</label>
                <input type="text" placeholder="Hossana | Ethiopia" className='userUpdateInput' />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img src={tigi} alt="tigi" className='userUpdateImg' />
                <label htmlFor="file">
                  <Publish className='userUpdateIcon'/></label>
                <input type="file" id='file' style={{display:'none'}}/>
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
       </div>
    </div>
  )
}

export default User
