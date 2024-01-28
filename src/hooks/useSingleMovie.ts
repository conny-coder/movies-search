import { toast } from 'react-toastify'
import { singleMoviesApi } from 'api/movies'
import { useEffect, useState } from 'react'
import { ISingleMovie } from 'types/movie.interface'

const defaultValues: ISingleMovie = {
	id: '',
	description: '',
	name: '',
	year: 2000,
	genres: [],
	rating: 1,
	videoUrl: '',
}

export const useSingleMovie = (id: string) => {
	const [movie, setMovie] = useState<ISingleMovie>(defaultValues)
	const [loading, setLoading] = useState<boolean>(false)

	useEffect(() => {
		const getMovie = async () => {
			try {
				setLoading(true)
				const response = await fetch(
					`https://api.kinopoisk.dev/v1.4/movie/${id}`,
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

				const movieData = await response.json()

				const newMovie: ISingleMovie = {
					id: movieData.id,
					name: movieData.name,
					year: movieData.year,
					description: movieData?.description || '',
					genres: movieData.genres || [],
					rating: movieData.rating?.imdb || 0,
					videoUrl: movieData?.videos?.trailers[0]?.url || '',
				}

				setMovie(newMovie)
			} catch (error: any) {
				if (error.status !== 403) {
					toast.error(`Не удалось получить информацию`)
				} else {
					const movieNew = singleMoviesApi.find((m) => m.id === id)

					setMovie(movieNew || defaultValues)
				}
			} finally {
				setLoading(false)
			}
		}

		getMovie()
	}, [id])

	return { movie, loading }
}
