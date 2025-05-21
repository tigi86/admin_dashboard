import React from 'react';
import './NewUser.css';

const NewUser = () => {
  return (
    <div className='newUser'>
      <h1 className="newUserTitle">New user</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" placeholder="Tigistu86" required />
        </div>
        <div className="newUserItem">
          <label htmlFor="fullName">Full Name</label>
          <input type="text" id="fullName" placeholder="Tigistu Yohannis" required />
        </div>
        <div className="newUserItem">
          <label htmlFor="phone">Phone</label>
          <input type="text" id="phone" placeholder="Phone" required />
        </div>
        <div className="newUserItem">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Email" required />
        </div>
        <div className="newUserItem">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Password" required />
        </div>
        <div className="newUserItem">
          <label htmlFor="address">Address</label>
          <input type="text" id="address" placeholder="Hossana | Ethiopia" required />
        </div>
        <div className="newUserItem">
          <label>Gender</label>
          <div className="newuserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label htmlFor="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label htmlFor="female">Female</label>
          </div>
        </div>
        <div className="newUserItem">
          <label htmlFor="active">Active</label>
          <select name="active" id="active" className="newUserSelect">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="newUserButtonContainer">
          <button className="newUserBtn">Create</button>
        </div>
      </form>
    </div>
  );
};

export default NewUser;
