import Search from './search/Search'
import styles from './Header.module.scss'
import { Logo } from './logo/Logo'
import { memo } from 'react'
import Genres from './genres/Genres'

const HeaderComponent = () => {
	return (
		<header className={styles.header}>
			<div className="container">
				<div className={styles.inner}>
					<Genres />
					<Logo />
					<Search />
				</div>
			</div>
		</header>
	)
}
export const Header = memo(HeaderComponent)
// export const Header = HeaderComponent
