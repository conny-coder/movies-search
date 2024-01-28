const PaginationButtonNext = () => {
	return (
		<div className="buttonNext">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={31}
				height={31}
				fill="none"
			>
				<g fill="#3B517B" clipPath="url(#a)">
					<path d="m21 16-5 5-1.306-1.306 2.77-2.77H9.537v-1.848h7.929l-2.771-2.77L16 11l5 5Z" />
					<path
						fillRule="evenodd"
						d="M15.333.667c8.285 0 15 6.715 15 15 0 8.284-6.715 15-15 15-8.284 0-15-6.716-15-15 0-8.285 6.716-15 15-15Zm12.273 15c0-6.778-5.495-12.273-12.273-12.273S3.061 8.889 3.061 15.667s5.494 12.272 12.272 12.272c6.778 0 12.273-5.494 12.273-12.272Z"
						clipRule="evenodd"
					/>
				</g>
				<defs>
					<clipPath id="a">
						<path fill="#fff" d="M31 0v31H0V0z" />
					</clipPath>
				</defs>
			</svg>
		</div>
	)
}
export default PaginationButtonNext
