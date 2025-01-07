import React from 'react'
import './Home.css'
import NavBar from '../../components/NavBar/NavBar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from "../../assets/hero_title.png";
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitileCards from '../../components/TitileCards/TitileCards'
import Footer from '../../components/Footer/Footer'
const Home = () => {
  return (
    <div className='home'>
      <NavBar/>
      <div className="hero">
        <img src={hero_banner} alt="" className='banner-img'/>
        <div className="hero-caption">
        <img src={hero_title} alt="" className='caption-img'/>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere rerum ratione unde quasi, eveniet facilis aliquam impedit praesentium nostrum odio, dolorum aut delectus maiores dolorem debitis aspernatur perspiciatis repellat fugit!</p>
        <div className="hero-btns">
          <button className='btn'>
            <img src={play_icon} alt=""/>
            Play
          </button>
          <button className='btn dark-btn'>
            <img src={info_icon} alt=""/>More Info </button>
        </div>
        <TitileCards/>
        </div>
      </div>
      <div className="more-cards">
      <TitileCards title={"Blockbuster Movies"} category={"top_rated"}/>
      <TitileCards title={"Only on Netflix"} category={"popular"}/>
      <TitileCards title={"Upcoming"} category={"upcoming"}/>
      <TitileCards title={"Top Pics For You"} category={"now_playing"}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
