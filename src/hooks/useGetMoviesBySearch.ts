import { toast } from 'react-toastify'
import { moviesApi } from 'api/movies'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IMovie } from 'types/movie.interface'
import { calculatePages } from 'utils/calculatePages'
import { moviesByCurrentPage } from 'utils/moviesByCurrentPage'

export const useGetMoviesBySearch = (search: string = '') => {
	const { pageNumber } = useParams()

	const currentPage = Number(pageNumber?.slice(4))

	const [movies, setMovies] = useState<IMovie[] | []>([])
	const [loading, setLoading] = useState<boolean>(false)
	const [page, setPage] = useState<number>(currentPage)
	const [pages, setPages] = useState<number>(0)

	useEffect(() => {
		setPage(currentPage)
	}, [pageNumber])

	useEffect(() => {
		const getMovies = async () => {
			try {
				setLoading(true)
				const response = await fetch(
					`https://api.kinopoisk.dev/v1.4/movie/search?page=${page}&limit=10&query=${search}`,
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
				if (keys.pages > 100) {
					setPages(100)
				} else {
					setPages(keys.pages)
				}
				const movies = await keys.docs

				const newMovies: IMovie[] = movies.map((m: any) => {
					return {
						id: m.id,
						name: m.name,
						year: m.year,
						image: m.poster.previewUrl,
					}
				})

				setMovies(newMovies)
			} catch (error: any) {
				if (error.status !== 403) {
					toast.error(`Не удалось получить фильмы`)
				} else {
					const newMovies = moviesApi.filter((m) =>
						m.name.toLowerCase().includes(search.toLowerCase())
					)

					setPages(calculatePages(newMovies.length))

					setMovies(moviesByCurrentPage(newMovies, currentPage))
				}
			} finally {
				setLoading(false)
			}
		}

		getMovies()
	}, [search, page])

	return {
		movies,
		loading,
		pages,
	}
}
