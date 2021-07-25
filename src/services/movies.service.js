import axios from 'axios'
import posters from '../assets/movies_images.json'

export default class MoviesService {
    static async getAll() {
        const response = await axios.get('https://ghibliapi.herokuapp.com/films');
        const movies = await response.data;

        if (
            movies === undefined
            || movies === null
        ) {
            return null;
        }

        return movies.map(movie => {
            const movie_poster = posters.find(poster => poster.movie_id === movie.id);
            if (movie_poster !== undefined) {
                movie.poster = movie_poster.poster;
            }
            return movie;
        })
    }

    static async find(id) {
        const response = await axios.get(`https://ghibliapi.herokuapp.com/films/${id}`);
        const movie = await response.data;

        if (
            movie === undefined
            || movie === null
        ) {
            return null;
        }

        const movie_poster = posters.find(poster => poster.movie_id === movie.id);

        if (movie_poster !== undefined) {
            movie.poster = movie_poster.poster;
        }
        return movie;
    }
}
