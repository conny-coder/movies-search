import './styles/style.scss'
import HomePage from './pages/Home'
import { BrowserRouter, Route } from 'react-router-dom'
import SingleMoviePage from 'pages/SingleMovie'
import Layout from 'components/layout/Layout'
import MoviesByGenrePage from 'pages/MoviesByGenre'
import MoviesBySearchPage from 'pages/MoviesBySearch'
import Error404Page from 'pages/Error404'
import CustomSwitch from 'CustomRoutes'

import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

function App() {
	return (
		<BrowserRouter>
			<Layout>
				<ToastContainer autoClose={2000} />
				<CustomSwitch>
					<Route path="/" element={<HomePage />} />
					<Route
						path="/movies/by-genre/:genre/:pageNumber"
						element={<MoviesByGenrePage />}
					/>
					<Route
						path="/movies/search/:query?/:pageNumber"
						element={<MoviesBySearchPage />}
					/>
					<Route path="/movie/:id" element={<SingleMoviePage />} />
					<Route path="*" element={<Error404Page />} />
				</CustomSwitch>
			</Layout>
		</BrowserRouter>
	)
}

export default App
