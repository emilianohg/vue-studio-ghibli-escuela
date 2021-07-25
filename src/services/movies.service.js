import axios from 'axios'

export default class MoviesService {
    static async getAll() {
        const response = await axios.get('https://ghibliapi.herokuapp.com/films');
        const movies = await response.data;

        if (
            movies !== undefined
            && movies !== null
            && movies.length > 0
        ) {
            return movies;
        }
        return null;
    }
}
