import { FC } from 'react'
import { ISingleMovie } from 'types/movie.interface'
import { genreListToString } from 'utils/genresListToString'
import Rating from '../rating/Rating'
import classes from './MovieDetails.module.scss'

const MovieDetails: FC<
	Pick<ISingleMovie, 'description' | 'genres' | 'rating' | 'year'>
> = ({ description, genres, rating, year }) => {
	return (
		<div className={classes.details}>
			<div className={classes.item}>Рік виходу: {year}р</div>
			<div className={classes.item}>Жанр: {genreListToString(genres)}</div>
			<div className={`${classes.item} ${classes.rating}`}>
				Рейтинг: <Rating count={rating} />
			</div>
			<div className={classes.item}>Опис: {description}</div>
		</div>
	)
}
export default MovieDetails
