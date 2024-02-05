import React from 'react';
import '../styles/dashboardStyle.css';
import homeIcon from '../assets/home_icon.svg';
import nameIcon from'../assets/name_icon.svg';

const Dashboard = () => {
    return (
      /*div is a "Tag", className is an "Attribute" that assigns a CSS class to the Tag  */
      <div className="dashboard-wrapper">
        <div className="top-bar">
          <div className="calendar-feature">
            {/* Insert Calendar Icon and Text here */}
          </div>
          <div className="search-feature">
            {/* Insert Search Input here */}
          </div>
          <div className="profile-feature">
            {/* Insert Profile Information here */}
          </div>
        </div>
        
        <div className="sidebar">

          <div><img src={nameIcon}  alt='NameIcon' className='name-icon'/></div>

          <div><img src={homeIcon} alt='HomeIcon' className='sidebar_image' /></div>
          <div><img src={homeIcon} alt='HomeIcon' className='sidebar_image' /></div>
          <div><img src={homeIcon} alt='HomeIcon' className='sidebar_image' /></div>
          <div><img src={homeIcon} alt='HomeIcon' className='home-icon' /></div>
          <div><img src={homeIcon} alt='HomeIcon' className='home-icon' /></div>
          <div><img src={homeIcon} alt='HomeIcon' className='home-icon' /></div>
     

        </div>
  
        
      </div>
    );
  }
  
  export default Dashboard;
