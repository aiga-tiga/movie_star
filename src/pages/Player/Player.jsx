import React, { use, useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useParams, useNavigate } from 'react-router-dom';

const Player = () => {
  
 const [movieData, setMovieData] = useState({
  title: "",
  overview: "",
  genres: [],
  release_date: "",
  vote_average: 0,
  credits: { cast: [] }, // We'll fetch credits for actors
});


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
  // Video info
  fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results[0]))
    .catch(err => console.error(err));

  // Movie details + credits
  fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US&append_to_response=credits`, options)
    .then(res => res.json())
    .then(res => setMovieData(res))
    .catch(err => console.error(err));
}, [id]);



  return (
    <div className = 'player'>
      <img src={back_arrow_icon} alt="" onClick={() => {navigate(-2)}}/>
      
      <div className="player-content">
  <iframe
    width="100%"
    height="100%"
    src={`https://www.youtube.com/embed/${apiData.key}`}
    title="trailer"
    frameBorder="0"
    allowFullScreen
  ></iframe>

  <div className="player-info">
    <h2>{movieData.title}</h2>
    <p><strong>Release Date:</strong> {movieData.release_date}</p>
    
    <div className="rating">
      <strong>Rating:</strong>
      {Array.from({ length: 10 }, (_, i) => (
        <span key={i} className={i < Math.round(movieData.vote_average) ? "star filled" : "star"}>★</span>
      ))}
      <span className="vote">({movieData.vote_average.toFixed(1)})</span>
    </div>
    
    <p><strong>Genres:</strong> {movieData.genres.map(g => g.name).join(", ")}</p>
    
    <div className="actors">
      <strong>Actors:</strong>
      <div className="actors-list">
        {movieData.credits.cast.slice(0, 6).map(actor => (
          <div key={actor.id} className="actor">
            {actor.profile_path ? (
              <img src={`https://image.tmdb.org/t/p/w92${actor.profile_path}`} alt={actor.name}/>
            ) : (
              <div className="no-image">{actor.name[0]}</div>
            )}
            <p>{actor.name}</p>
          </div>
        ))}
      </div>
    </div>

    <p className="overview">{movieData.overview}</p>
  </div>
</div>



      </div>

  )
}

export default  Player
