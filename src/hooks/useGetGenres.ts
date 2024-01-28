import { toast } from 'react-toastify'
import { genresApi } from 'api/genres'
import { useEffect, useState } from 'react'
import { IGenre } from 'types/genre.interface'

export const useGetGenres = () => {
	const [loading, setLoading] = useState<boolean>(false)
	const [genres, setGenres] = useState<IGenre[] | []>([])

	useEffect(() => {
		const getGenres = async () => {
			try {
				setLoading(true)
				const response = await fetch(
					'https://api.kinopoisk.dev/v1/movie/possible-values-by-field?field=genres.name',
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

				const genres = await response.json()

				setGenres(genres)
			} catch (error: any) {
				if (error.status !== 403) {
					toast.error(`Не удалось получить список жанров`)
				} else {
					const genres = genresApi
					setGenres(genres)
				}
			} finally {
				setLoading(false)
			}
		}

		getGenres()
	}, [])

	return {
		loading,
		genres,
	}
}
