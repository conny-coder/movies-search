import { FC } from 'react'
import classes from './GenreList.module.scss'
import GenresList from './GenresList'

const GenresListContainer: FC<{ isShowList: boolean }> = ({ isShowList }) => {
	return (
		<div
			className={`${classes['list-outer']} ${
				isShowList ? classes['_show'] : ''
			}`}
		>
			<GenresList />
		</div>
	)
}

export default GenresListContainer
