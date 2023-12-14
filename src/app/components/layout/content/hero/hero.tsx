import React from 'react'
import Image from 'next/image'
import krakazybra from './images/img.png'
const textHero = {
	title: 'Комплексное сопровождение',
	subtitle:
		'Технического присоединения, оформления, согласования и сдачи в эксплуатацию водоснабжения и канализации, газификации, электроснабжения.',
	subtitleDesigning:
		'Полный комплекс работ по разработке проектной и рабочей документации, а также различных видов инженерных изысканий для проектирования объектов любой степени сложности.',
}

function Hero() {
	return (
		<div
			className={
				'relative flex flex-col gap-16 overflow-clip pb-[200px] pl-[52px] pr-[112px] pt-[96px] font-cygro text-white'
			}
		>
			<Image
				className={
					'absolute -right-24 -top-60 z-0 min-w-[608px] rotate-[5deg] md:min-w-[1024px]'
				}
				src={krakazybra}
				width={1200}
				height={100}
				priority={true}
				alt={'krakazybra'}
			></Image>
			<h1 className={'z-10 text-9xl font-black leading-[6rem]'}>
				{textHero.title}
			</h1>
			<h3 className={'z-10 text-2xl font-normal leading-10'}>
				{textHero.subtitle}
				<br />
				{textHero.subtitleDesigning}
			</h3>
		</div>
	)
}

export default Hero
