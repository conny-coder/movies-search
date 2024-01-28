import Heading from 'components/ui/heading/Heading'
import Loader from 'components/ui/loader/Loader'
import MoviesList from 'components/ui/moviesList/MoviesList'
import { Pagination } from 'components/ui/pagination/Pagination'
import { useGetMoviesBySearch } from 'hooks/useGetMoviesBySearch'
import { useParams } from 'react-router-dom'

const MoviesBySearch = () => {
	const { query } = useParams()

	const { loading, movies, pages } = useGetMoviesBySearch(query)

	if (loading) {
		return (
			<div style={{ marginTop: 250 }}>
				<Loader />
			</div>
		)
	}

	return (
		<>
			<Heading>Пошук по: {query}</Heading>
			<MoviesList movies={movies} />
			<Pagination pages={pages} />
		</>
	)
}
export default MoviesBySearch
