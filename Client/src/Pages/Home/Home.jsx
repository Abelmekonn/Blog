import React from 'react'
import Banner from '../../Components/Home/Banner'
import img1 from "../../assets/Banner/Banner1.jpg"
import img2 from "../../assets/Banner/Banner2.jpg"
import Topic from '../../Components/Home/Topic'
const Home = () => {
  return (
    <div>
      <Banner 
      Bgimgage1={img1}
      Bgimage2={img2}
      text="Welcome to Merja"
      />
      <Topic />
    </div>
  )
}

export default Home
