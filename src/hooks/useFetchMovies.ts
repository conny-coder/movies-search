import { toast } from 'react-toastify'
import { moviesApi } from 'api/movies'
import { useEffect, useState } from 'react'
import { IMovie } from 'types/movie.interface'

export const useFetchMovies = () => {
	const [movies, setMovies] = useState<IMovie[] | []>([])
	const [loading, setLoading] = useState<boolean>(false)

	useEffect(() => {
		const getMovies = async () => {
			try {
				setLoading(true)
				const response = await fetch(
					'https://api.kinopoisk.dev/v1.4/movie?page=1&limit=10',
					{
						headers: {
							'X-API-KEY': process.env.REACT_APP_API_KEY || '',
						},
					}
				)

				if (!response.ok) {
					throw {
						status: response.status,
						text: response.statusText,
					}
				}

				const keys = await response.json()
				const movies = await keys.docs

				const newMovies: IMovie[] = movies.map((m: any) => {
					return {
						id: m.id,
						name: m.name,
						year: m.year,
						image: m.poster?.previewUrl || '',
					}
				})

				setMovies(newMovies)
			} catch (error: any) {
				if (error.status !== 403) {
					toast.error(`Не удалось получить фильмы`)
				} else {
					const newMovies = moviesApi.slice(0, 10)

					setMovies(newMovies)
				}
			} finally {
				setLoading(false)
			}
		}

		getMovies()
	}, [])

	return {
		movies,
		loading,
	}
}
