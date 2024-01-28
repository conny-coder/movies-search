import { FC } from 'react'
import { IMovie } from 'types/movie.interface'
import MoviesItem from '../moviesItem/MoviesItem'
import NothingFound from '../nothingFound/NothingFound'
import classes from './MoviesList.module.scss'

const MoviesList: FC<{ movies: IMovie[] }> = ({ movies }) => {
	if (!movies.length) {
		return <NothingFound />
	}

	return (
		<div className={classes.movies}>
			{movies?.map((m) => (
				<MoviesItem
					key={m.name}
					image={m.image}
					year={m.year}
					id={m.id}
					name={m.name}
				/>
			))}
		</div>
	)
}
export default MoviesList
