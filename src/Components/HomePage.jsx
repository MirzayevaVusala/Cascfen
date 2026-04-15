import React from 'react'
import Navbar from './Navbar'
import Logo from './Logo'
import Ribbon from './Ribbon'
import NewestSection from './Newest'
import ProjectsSection from './Projects'
import Articles from '../Routes/Articles'
import QhtSectors from '../Routes/Qhtsectors'
import InternationalSector from './InternationalSector'
import MustRead from './MustRead'
import Footer from './Footer'

const HomePage = () => {
  return (
    <div>
        <Navbar/>
        <Logo/>
        <Ribbon/>
        <Newest/>
        <Projects/>
        <Articles/>
        <QhtSectors/>
        <InternationalSector/>
        <MustRead/>
        <Footer/>
    </div>
  )
}

export default HomePage