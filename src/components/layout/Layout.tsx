import { FC, PropsWithChildren } from 'react'
import { Header } from './header/Header'

const Layout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			<Header />
			<main>
				<div className="container">{children}</div>
			</main>
		</>
	)
}
export default Layout
