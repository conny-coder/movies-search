import { FC, PropsWithChildren } from 'react'
import classes from './MovieTitle.module.scss'

const MovieTitle: FC<PropsWithChildren> = ({ children }) => {
	return (
		<h2 className={classes.name}>
			<span>{children}</span>
		</h2>
	)
}
export default MovieTitle
