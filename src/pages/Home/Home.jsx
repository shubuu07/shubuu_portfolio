import React from 'react'
import Cards from '../../components/Cards/Cards'
import Footer from '../../components/Footer'
import Hero from '../../components/Hero'
import HomeSec from '../../components/HomeSec'
import NewsEmail from '../../components/NewsEmail'
const Home = () => {
  return (
    <>
      <HomeSec />
      <Hero/>
      <NewsEmail/>
      <Cards/>
      <Footer/>
    </>
  )
}

export default Home