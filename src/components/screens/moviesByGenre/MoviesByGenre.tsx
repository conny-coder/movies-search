import Heading from 'components/ui/heading/Heading'
import Loader from 'components/ui/loader/Loader'
import MoviesList from 'components/ui/moviesList/MoviesList'
import { Pagination } from 'components/ui/pagination/Pagination'
import { useGetMoviesByGenre } from 'hooks/useGetMoviesByGenre'
import { useParams } from 'react-router-dom'

const MoviesByGenre = () => {
	const { genre } = useParams()

	const { loading, movies, pages } = useGetMoviesByGenre(genre)

	if (loading) {
		return (
			<div style={{ marginTop: 250 }}>
				<Loader />
			</div>
		)
	}

	return (
		<>
			<Heading>Жанр: {genre}</Heading>
			<MoviesList movies={movies} />
			<Pagination pages={pages} />
		</>
	)
}
export default MoviesByGenre
