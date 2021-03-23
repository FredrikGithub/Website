const Movie = {
    title: "Movie",
    name: "Movie",
    type: "document",
    fields: [
        {
        name: "title",
        type: "string"
        },
        {
        title: 'Actor',
        name: 'Actor',
        type: 'reference',
        to: [{type: 'Actor'}]
        }
    ]
}

export default Movie