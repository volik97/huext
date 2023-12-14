import React from 'react'

interface ICard {
	className?: string
	icon?: JSX.Element
	text: string
	title?: string
}
function Card({ className, icon, text, title }: ICard) {
	return (
		<div
			className={`${className} ${
				icon ? 'justify-between p-8' : 'justify-start p-8 pt-10'
			} flex flex-col border border-color-border text-xl font-normal leading-loose tracking-tight`}
		>
			{icon && (
				<div className={'flex flex-row items-center justify-start gap-3 '}>
					{icon}
					{title && (
						<h5
							className={
								'text- text-2xl leading-loose tracking-wide text-color-text-title'
							}
						>
							{title}
						</h5>
					)}
				</div>
			)}
			<p
				className={
					'text-2xl leading-loose tracking-wide text-color-text-chip-card'
				}
			>
				{text}
			</p>
		</div>
	)
}

export default Card
