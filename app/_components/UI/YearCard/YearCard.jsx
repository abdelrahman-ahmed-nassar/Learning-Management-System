import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import "./YearCard.scss"

function YearCard({image, mainText, secondaryText, href}) {
	return (
		<div className="YearCard">
			<div className="image-container">
			<Image src={image} alt="year image" />
			</div>
			<Link href={href} className='text-container'>
				<p className='main-text'>{mainText}</p>
				<div className="divider"></div>
				<p className='secondary-text'>{secondaryText}</p>
			</Link>
		</div>
	);
}

export default YearCard;

