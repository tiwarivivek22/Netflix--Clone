import React, { useEffect, useRef, useState } from 'react'
import './TitileCards.css'
import cards_data from '../../assets/cards/cards_data'



const TitileCards = ({title, category}) => {
  const [apiData, setApiData]= useState([]);

  const cardsRef = useRef();
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYWJlNzRmOWRlZDk5MDU4ZjI5MDQ3ZmI3ZjVhY2QyZCIsIm5iZiI6MTczNjIyMzcyMy4xNTM5OTk4LCJzdWIiOiI2NzdjYWJlYmQxMDJlNzc2ZjU3NDg5MmYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.oJM_yHvt1uOvR8BXh8WZ7xqyc207C-n25yONfE_NGog'
    }
  };
  
  
const handleWheel = (event)=>{

  fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results))
  .catch(err => console.error(err));

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
        {apiData.map((card, index) => {
           return <div className="card" key={index}> 
           <img src={`https://image.tmdb.ong/t/p/w500 `+ card.backdrop_path} alt="" />
           <p>{card.original_title}</p>
          </div>
        })}
      </div>
    </div>
  )
}

export default TitileCards