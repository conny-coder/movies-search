import { FC,  } from 'react'
import { useNavigate,  } from 'react-router-dom'
import { IGenre } from 'types/genre.interface'
import classes from './GenreList.module.scss'

const GenresItem: FC<IGenre> = ({ name }) => {
	const navigate = useNavigate()

	const handleClick = () => {
		navigate(`/movies/by-genre/${name}/page1`)
	}

	return (
		<li className={classes.item} onClick={handleClick}>
			{name}
		</li>
	)
}
export default GenresItem
