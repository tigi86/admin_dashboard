import React from 'react'
import './Home.css'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import Chart from '../../components/chart/Chart'
import { UserData } from '../../dummyData'
import WidegetSm from '../../components/widegetSm/WidegetSm'
import WidegetLg from '../../components/widegetLg/WidegetLg'
const Home = () => {
  return (
    <div className='home'>
      <FeaturedInfo />
      <Chart data={UserData} title='User Analytics' grid dataKey='Active User' />
      <div className="homeWidgets">
        <WidegetSm/>
        <WidegetLg/>
      </div>
    </div>
  )
}

export default Home
