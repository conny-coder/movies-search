import Heading from 'components/ui/heading/Heading'
import Loader from 'components/ui/loader/Loader'
import MoviesList from 'components/ui/moviesList/MoviesList'
import { useFetchMovies } from 'hooks/useFetchMovies'

const Home = () => {
	const { loading, movies } = useFetchMovies()

	if (loading) {
		return (
			<div style={{ marginTop: 250 }}>
				<Loader />
			</div>
		)
	}

	return (
		<>
			<Heading>Топ 10</Heading>
			<MoviesList movies={movies} />
		</>
	)
}
export default Home
