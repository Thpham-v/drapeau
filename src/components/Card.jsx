import React from 'react';

const Card = ({country}) => {
	return (
		<li className="card">
			<img src={country.flags.svg} alt={"Drapeau " + country.translations.fra.common} />
			<div className='infos'>
				<h2>{country.translations.fra.common}</h2>
				<div>population :<br/>{country.population} habitants</div>
			</div>
		</li>
	);
};

export default Card;