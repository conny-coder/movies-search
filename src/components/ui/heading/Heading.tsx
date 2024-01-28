import { FC, PropsWithChildren } from 'react'
import classes from './Heading.module.scss'

const Heading: FC<PropsWithChildren> = ({ children }) => {
	return <h2 className={classes.heading}>{children}</h2>
}
export default Heading
