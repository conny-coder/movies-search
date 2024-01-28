import { IMovie } from 'types/movie.interface'

export const moviesByCurrentPage = (movies: IMovie[], page: number) => {
	return movies.slice(10 * (page - 1), 10 * page)
}
