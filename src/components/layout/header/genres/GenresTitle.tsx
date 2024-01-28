import { FC } from 'react'
import arrowRight from '../../../../assets/images/arrow-right.svg'
import classes from './GenreList.module.scss'

const GenresTitle: FC<{
	isShowList: boolean
	onClick: () => void
}> = ({ isShowList, onClick }) => {
	return (
		<div
			className={`${classes.title} ${isShowList ? classes['_active'] : ''}`}
			onClick={onClick}
		>
			Жанры
			<span>
				<img src={arrowRight} alt="" />
			</span>
		</div>
	)
}

export default GenresTitle
