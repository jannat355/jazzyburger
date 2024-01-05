import React, { useEffect } from 'react'
import Hero from '../components/Hero'

const Home = () => {
    useEffect(()=>{
        document.title = 'Jazzyburger || home'
    })
  return (
    <>
    <Hero/>
    </>
  )
}

export default Home