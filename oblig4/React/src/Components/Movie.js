import React from 'react'

const Movie = ({title, actor}) => {
    return (
        <div>
           <p> {title} {actor}</p>
        </div>
    )
}

export default Movie
