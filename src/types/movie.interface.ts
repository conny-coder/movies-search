import { IGenre } from './genre.interface'

export interface IMovie {
	id: string
	name: string
	year: number
	image: string
}

export interface IMovieByGenre extends IMovie {
	genres: IGenre[]
}

export interface ISingleMovie {
	id: string
	name: string
	year: number
	description: string
	rating: number
	videoUrl: string
	genres: IGenre[]
}
