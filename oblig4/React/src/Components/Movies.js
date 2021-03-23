import React, { useState } from 'react'
import Movie from './Movie'
import {getMovies} from '../Utils/movieService'
const Movies = () => {
    const [data, setData] = useState([]);


    const handleClick = async () =>{
        const allmovies = await getMovies();
        setData(allmovies)
    }
    console.log(data)
    
    return (
        <section>
            <button type="button" onClick={handleClick}>Klikk meg</button>
            {/* {data?.length > 0 ? <p>{data[0]}</p> : <p>Null</p>} */}
            {data?.length > 0 ? data.map(movie => <Movie title={movie.title} actor={movie.actor} />) : <p>Ingen filmer</p>}
        </section>
    )

}

export default Movies;
