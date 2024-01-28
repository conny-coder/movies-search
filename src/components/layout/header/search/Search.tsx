import classes from './Search.module.scss'
import searchIcon from '../../../../assets/images/search.svg'
import React, { ChangeEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Search = () => {
	const [value, setValue] = useState<string>('')
	const navigate = useNavigate()

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value)
	}

	const handleKeyDown = (e: any) => {
		if (e.key === 'Enter' && value === '') {
			toast.warn(`Введи текст запроса`)
		} else if (e.key === 'Enter') {
			navigate(`/movies/search/${value}/page1`)
		}
	}

	return (
		<div className={classes.outer}>
			<div className={classes.inner}>
				<input
					value={value}
					type="text"
					placeholder="Поиск..."
					className={classes.input}
					onChange={(e) => handleChange(e)}
					onKeyDown={(e) => handleKeyDown(e)}
				/>
				<span className={classes.icon}>
					<img src={searchIcon} alt="" />
				</span>
			</div>
		</div>
	)
}
export default Search
