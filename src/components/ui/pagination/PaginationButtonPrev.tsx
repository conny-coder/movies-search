const PaginationButtonPrev = () => {
	return (
		<div className="buttonPrev">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={31}
				height={31}
				fill="none"
			>
				<g fill="#3B517B" clipPath="url(#a)">
					<path d="m10 15 5-5 1.306 1.306-2.77 2.77h7.929v1.848h-7.93l2.771 2.77L15 20l-5-5Z" />
					<path
						fillRule="evenodd"
						d="M15.667 30.333c-8.285 0-15-6.715-15-15 0-8.284 6.715-15 15-15 8.284 0 15 6.716 15 15 0 8.285-6.716 15-15 15Zm-12.273-15c0 6.778 5.495 12.273 12.273 12.273s12.272-5.495 12.272-12.273S22.445 3.061 15.667 3.061c-6.778 0-12.273 5.494-12.273 12.272Z"
						clipRule="evenodd"
					/>
				</g>
				<defs>
					<clipPath id="a">
						<path fill="#fff" d="M0 31V0h31v31z" />
					</clipPath>
				</defs>
			</svg>
		</div>
	)
}
export default PaginationButtonPrev
