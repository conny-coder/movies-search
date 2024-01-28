import { FC, PropsWithChildren, useEffect, useState } from 'react'
import { Routes, useLocation } from 'react-router-dom'
import TopBarProgress from 'react-topbar-progress-indicator'

const CustomSwitch: FC<PropsWithChildren> = ({ children }) => {
	const [progress, setProgress] = useState<boolean>(false)
	const [prevLoc, setPrevLoc] = useState<string>('')
	const location = useLocation()

	TopBarProgress.config({
		barColors: {
			'0': '#e43636',
			'1.0': '#d30a0a',
		},
		shadowBlur: 5,
	})

	useEffect(() => {
		if (location.pathname !== prevLoc) {
			setPrevLoc(location.pathname)
			setProgress(true)
		}
	}, [location, prevLoc])

	useEffect(() => {
		if (progress) {
			setProgress(false)
		}
	}, [progress])

	return (
		<>
			{progress && <TopBarProgress />}
			<Routes>{children}</Routes>
		</>
	)
}

export default CustomSwitch
