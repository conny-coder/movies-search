export const calculatePages = (moviesLength: number) => {
	return Math.ceil(moviesLength / 10)
}
