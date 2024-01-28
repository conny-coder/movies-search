import classes from './Rating.module.scss'
import starsImage from '../../../assets/images/rating.png'
import { FC } from 'react'

const Rating: FC<{ count: number }> = ({ count }) => {
	const percent = (count / 10) * 100

	return (
		<div className={classes.wrapper}>
			<div className={classes.img} style={{ width: `${percent}%` }}>
				<img src={starsImage} alt="" />
			</div>
		</div>
	)
}
export default Rating
