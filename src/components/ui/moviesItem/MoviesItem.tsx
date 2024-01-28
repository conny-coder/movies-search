import { FC } from 'react'
import { Link } from 'react-router-dom'
import { IMovie } from 'types/movie.interface'

import classes from './MoviesItem.module.scss'

import comingSoonPicture from '../../../assets/images/coming-soon.png'

const MoviesItem: FC<IMovie> = ({ name, image, year, id }) => {
	console.log(image)

	return (
		<div className={classes.box} title={name}>
			<Link to={`/movie/${id}`} className={classes['box__inner']}>
				<span className={classes.name}>{name}</span>
				<div className={classes['image-box']}>
					{!image ? (
						<img src={comingSoonPicture} className={classes.soon} alt="" />
					) : (
						<img
							src={image}
							className={classes.image}
							alt=""
							width={200}
							height={300}
						/>
					)}
				</div>
				<span className={classes.year}>{year}</span>
			</Link>
		</div>
	)
}

export default MoviesItem
