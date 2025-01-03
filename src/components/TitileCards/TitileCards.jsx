import React, { useEffect, useRef } from 'react'
import './TitileCards.css'
import cards_data from '../../assets/cards/cards_data'



const TitileCards = ({title, category}) => {
  const cardsRef = useRef();
const handleWheel = (event)=>{
  event.preventDefault();
  cardsRef.current.scrollLeft += event.deltaY;  
}
useEffect(() =>{
  cardsRef.current.addEventListener('wheel', handleWheel);
},[])
  return (
    <div className='titilecards'>
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {cards_data.map((card, index) => {
           return <div className="card" key={index}> 
           <img src={card.imgage} alt="" />
           <p>{card.name}</p>
          </div>
        })}
      </div>
    </div>
  )
}

export default TitileCards