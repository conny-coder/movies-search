import classes from './GenreList.module.scss'

import { useGetGenres } from 'hooks/useGetGenres'
import GenresItem from './GenresItem'
import Loader from 'components/ui/loader/Loader'

const GenresList = () => {
	const { genres, loading } = useGetGenres()

	return (
		<ul className={classes.list}>
			{loading ? (
				<Loader />
			) : (
				genres.map((g, idx) => (
					<GenresItem key={`${g.name} ${idx}`} name={g.name} />
				))
			)}
		</ul>
	)
}
export default GenresList
