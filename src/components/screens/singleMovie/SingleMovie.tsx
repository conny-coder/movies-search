import Loader from 'components/ui/loader/Loader'
import MovieDetails from 'components/ui/movieDetails/MovieDetails'
import MovieTitle from 'components/ui/movieTitle/MovieTitle'
import MovieVideo from 'components/ui/movieVideo/MovieVideo'
import { useSingleMovie } from 'hooks/useSingleMovie'
import { useParams } from 'react-router-dom'

import classes from './SingleMovie.module.scss'

const SingleMovie = () => {
	const { id } = useParams()
	const {
		loading,
		movie: { description, genres, name, rating, videoUrl, year },
	} = useSingleMovie(id || '')

	if (loading) {
		return (
			<div style={{ marginTop: 250 }}>
				<Loader />
			</div>
		)
	}

	return (
		<div className={classes.wrapper}>
			<MovieTitle>{name}</MovieTitle>
			<div className={classes.content}>
				<MovieVideo videoUrl={videoUrl} />
				<MovieDetails
					description={description}
					genres={genres}
					rating={rating}
					year={year}
				/>
			</div>
		</div>
	)
}
export default SingleMovie
