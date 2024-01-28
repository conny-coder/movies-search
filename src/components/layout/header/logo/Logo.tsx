import { Link } from 'react-router-dom'
import classes from './Logo.module.scss'

const LogoComponent = () => {
	return (
		<div className={classes['logo__wrapper']}>
			<Link to="/" className={classes.logo}>
				<h1 className={classes.title}>Підбірка найкращих фільмів</h1>
				<span className={classes['sub-title']}>Зроби свій вибір</span>
			</Link>
		</div>
	)
}

export const Logo = LogoComponent
