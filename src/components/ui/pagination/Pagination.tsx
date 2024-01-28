import { FC, memo } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

import classes from './Pagination.module.scss'
import 'swiper/css/navigation'

import 'swiper/css'
import PaginationButtonPrev from './PaginationButtonPrev'
import PaginationButtonNext from './PaginationButtonNext'

const PaginationComponent: FC<{
	pages: number
}> = ({ pages }) => {
	const { pageNumber } = useParams()
	const pathWithoutPage = window.location.pathname.replace(/\/page\d+$/, '')
	const currentPage = Number(pageNumber?.slice(4))

	const pageBlocks = Array.from({ length: pages }, (_, index) => (
		<SwiperSlide key={`pagination-item-${index}`}>
			<Link
				to={`${pathWithoutPage}/page${index + 1}`}
				className={`${classes.item} ${
					currentPage === index + 1 ? classes['_active'] : ''
				}`}
			>
				{index + 1}
			</Link>
		</SwiperSlide>
	))

	return (
		<Swiper
			spaceBetween={0}
			slidesPerView={8}
			navigation={{
				prevEl: '.buttonPrev',
				nextEl: '.buttonNext',
			}}
			initialSlide={currentPage - 1}
			slidesPerGroup={8}
			className={classes.pagination}
			modules={[Navigation]}
		>
			{pageBlocks}
			<PaginationButtonPrev />
			<PaginationButtonNext />
		</Swiper>
	)
}
// export default Pagination
export const Pagination = memo(PaginationComponent)
