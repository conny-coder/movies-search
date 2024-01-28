import { FC } from 'react'
import { ISingleMovie } from 'types/movie.interface'
import classes from './MovieVideo.module.scss'

import noVideoPicture from '../../../assets/images/no-video.png'

const MovieVideo: FC<Pick<ISingleMovie, 'videoUrl'>> = ({ videoUrl }) => {
	return (
		<div className={classes.video}>
			{!videoUrl ? (
				<img src={noVideoPicture} alt="" />
			) : (
				<iframe
					width="560"
					height="400"
					src={videoUrl}
					title="YouTube video player"
					allowFullScreen
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				></iframe>
			)}
		</div>
	)
}
export default MovieVideo
