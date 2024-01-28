import { IGenre } from 'types/genre.interface'

export const genreListToString = (genres: IGenre[]) => {
	return genres.map((g) => g.name).join(', ')
}
