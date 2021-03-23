const Movie = {
    title: 'movie',
    name: 'movie',
    type: 'document',
    fields: [
        {
        name: 'title',
        type: 'string'
        },
        {
        title: 'actor',
        name: 'actor',
        type: 'reference',
        to: [{type: 'actor'}]
        }
    ]
}

export default Movie