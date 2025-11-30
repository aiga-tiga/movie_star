import React, { use, useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useParams, useNavigate } from 'react-router-dom';

const Player = () => {

  const {id} = useParams();
  const navigate = useNavigate();

const [apiData, setApiData] = React.useState({
  name: "",
  key: "",
  published_at: "",
  type: ""
});

  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNmI5NjNiYmZiOTZmYjEzZjFiMGFlMDU2ZTFhMzY1OSIsIm5iZiI6MTc2NDUxODk1MS43NjE5OTk4LCJzdWIiOiI2OTJjNmMyN2FjZDk5MjMxMmQ4ZmI3MzEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.7uoc1ufImp1szO3T3Vh1r1o64kDV72bCU-JjcThYbGU'
  }
};

useEffect(() => {
  fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results[0]))
  .catch(err => console.error(err));

}, []);

  return (
    <div className = 'player'>
      <img src={back_arrow_icon} alt="" onClick={() => {navigate(-2)}}/>
      <iframe width='90%' height='90%' 
      src={`https://www.youtube.com/embed/${apiData.key}`}
      title='trailer' frameBorder='0' allowFullScreen></iframe>
      <div className="player-info">
        <p>{apiData.publshed_at}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
      </div>

  )
}

export default  Player
