import React, {useState} from 'react'
import AboutMe from '../components/AboutMe'
import LandingPage from '../components/LandingPage'
import Navbar from '../components/Navbar'
import Topbar from '../components/Topbar'
import IconBar from '../components/IconBar'
import ProjectSection from '../components/ProjectSection'


//

const Home = () => {

  // update state and open the Topbar icon
  const [isOpen, setIsOpen] = useState(false)

  // update state and close the Topbar icon
  const toggle =() => {
    setIsOpen(!isOpen)
  }





  return (
    <>
    <Topbar isOpen={isOpen} toggle ={toggle} />
    <Navbar  toggle={toggle}/>
    <LandingPage />
    <AboutMe />
    <IconBar/>
    <ProjectSection />

    </>
  )
}


export default Home