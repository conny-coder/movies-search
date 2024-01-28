import { useRef, useState } from 'react'

import classes from './GenreList.module.scss'
import useOnClickOutside from 'hooks/useOnClickOutside'
import GenresListContainer from './GenresListContainer'
import GenresTitle from './GenresTitle'

const Genres = () => {
	const [isShowList, setIsShowList] = useState<boolean>(false)

	const handleClick = () => {
		setIsShowList((prev) => !prev)
	}

	const node = useRef<HTMLDivElement>(null)

	useOnClickOutside(node, () => {
		if (isShowList) {
			setIsShowList(false)
		}
	})

	return (
		<div className={classes.box} ref={node}>
			<GenresTitle isShowList={isShowList} onClick={handleClick} />
			<GenresListContainer isShowList={isShowList} />
		</div>
	)
}
export default Genres
