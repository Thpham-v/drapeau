import React from 'react';
import map from '../../assets/map.svg'

const About = () => {
	return (
		<div className='about'>
			<h1>A propos</h1>
			<p>
				Bienvenue sur notre site Web qui répertorie les drapeaux du monde avec des informations détaillées sur les pays associés.<br/>
				Nous croyons que les drapeaux sont des symboles puissants qui reflètent l'identité et la culture d'un pays.<br/>
				C'est pourquoi nous avons rassemblé toutes les informations importantes sur les drapeaux de chaque pays, y compris leur nom, leur population et d'autres données utiles.<br/>
				Notre objectif est de devenir la source la plus complète et la plus fiable pour les informations sur les drapeaux du monde.<br/>
				Nous mettons à jour régulièrement notre base de données pour vous assurer d'avoir les informations les plus récentes et les plus précises.<br/>
				De plus, nous avons inclus des images haute résolution de chaque drapeau pour vous permettre de les voir en détail.<br/>
				Nous espérons que vous trouverez ce site utile et informatif. Si vous avez des commentaires ou des suggestions, n'hésitez pas à nous contacter.<br/>
				Merci de visiter notre site et de découvrir les drapeaux du monde!
			</p>
			<div className='map'><img src={map} alt="map" /></div>
		</div>
	);
};

export default About;