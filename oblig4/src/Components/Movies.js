import React, { useState } from 'react'
import Movie from './Movie'
import getMovies from '../Utils/movieService' 
const Movies = () => {
    const [data, setData] = useState([]);


    const handleClick = async () =>{
        const allmovies = await getMovies();
        setData(allmovies)
    }

    return (
        <section>
                {data?.length > 0 ? <p>{data[0].title}</p> : <p>Null</p>}
            <Movie title="title" actor="actor"/>
            <button type="button"onClick={handleClick}>Klikk meg</button>
        </section>
    )
}

export default Movies
