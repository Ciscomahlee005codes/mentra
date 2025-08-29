import React from 'react'
import UserSideBar from "../../Dashboard/UserSidebar/UserSidebar"
import UserHeader from '../../Dashboard/UserHeader/UserHeader'
import UserHero from '../../Dashboard/UserHero/UserHero'
import "./UserDashboardPage.css"
import MentorsChat from '../../Dashboard/MentorsChat/MentorsChat'

const UserDashboardPage = () => {
  return (
    <div className='dashboard-layout'>
      <UserSideBar />
      <div className="dashboard-content">
        <UserHeader />
        <div className="middle-level">
          <UserHero />
          <MentorsChat />
        </div>
      </div>
    </div>
  )
}

export default UserDashboardPage
