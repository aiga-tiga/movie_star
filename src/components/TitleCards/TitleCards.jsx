import React, { useEffect, useRef } from 'react';
import './TitleCards.css';
import cards_data from '../../assets/cards/Cards_data';
import { Link } from 'react-router-dom';


const TitleCards = ({ title, category }) => {

  const [apiData, setApiData] = React.useState([]);

  const cardsRef = useRef();

  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNmI5NjNiYmZiOTZmYjEzZjFiMGFlMDU2ZTFhMzY1OSIsIm5iZiI6MTc2NDUxODk1MS43NjE5OTk4LCJzdWIiOiI2OTJjNmMyN2FjZDk5MjMxMmQ4ZmI3MzEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.7uoc1ufImp1szO3T3Vh1r1o64kDV72bCU-JjcThYbGU'
  }
};

const handleWheel = (e) => {
  e.preventDefault();
  cardsRef.current.scrollLeft += e.deltaY;
};

useEffect(() => {

  fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results))
  .catch(err => console.error(err));

  cardsRef.current.addEventListener('wheel', handleWheel);
}, []);

  return (
    <div className='title-cards'>
      <h2>{title ? title : "Popular On Movie Star"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => {
          return <Link to={`/player/${card.id}`} className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w780` +card.backdrop_path} alt={card.name} />
            <p>{card.original_title}</p>
          </Link>
        })}
      </div>
    </div>
  );
}

//Soon to be added

// useEffect(() => {
//   const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNmI5NjNiYmZiOTZmYjEzZjFiMGFlMDU2ZTFhMzY1OSIsIm5iZiI6MTc2NDUxODk1MS43NjE5OTk4LCJzdWIiOiI2OTJjNmMyN2FjZDk5MjMxMmQ4ZmI3MzEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.7uoc1ufImp1szO3T3Vh1r1o64kDV72bCU-JjcThYbGU'
//   }
// };

// fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
//   .then(res => res.json())
//   .then(res => console.log(res))
//   .catch(err => console.error(err));
// }, [])

export default TitleCards;
