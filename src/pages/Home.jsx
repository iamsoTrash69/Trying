import React from 'react'
import Header from '../components/Header'
import SpecialityMenu from '../components/SpecialityMenu'
import TopMentors from '../components/TopMentors'
import Banner from '../components/Banner'

const home = () => {
  return (
    <div>
        <Header />
        <SpecialityMenu />
        <TopMentors />
        <Banner />
    </div>
  )
}

export default home