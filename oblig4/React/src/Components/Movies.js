import React, { useState } from 'react'
import Movie from './Movie'
import {getMovies} from '../Utils/movieService'
import styled from 'styled-components'

const Butten = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;

`;
const Movies = () => {
    const [data, setData] = useState([]);


    const handleClick = async () =>{
        const allmovies = await getMovies();
        setData(allmovies)
    }
    console.log(data)
    
    return (
        <section>
            <Butten type="button" onClick={handleClick}>Klikk meg</Butten>
            {data?.length > 0 ? data.map(movie => <Movie title={movie.title} actor={movie.actor} />) : <p>Ingen filmer</p>}
        </section>
    )

}

export default Movies;
