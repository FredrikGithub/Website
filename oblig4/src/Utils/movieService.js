import client from './Client'


const movieFields = 'title, actor'

const getMovies = async () =>{
    const data = await client.fetch(`*[_type == "movie"]{${movieFields}}`);
    return data;
};

/*const getMovie = async () =>{
    const data = await client.fetch(`*[_type == "movie"]{${movieFields}}`);
    return data;
};*/
export default getMovies