import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card'

const Countries = () => {

	const [data, setData] = useState([]);
	const [rangeValue, setRangeValue] = useState(36);
	const [selectedRadio, setSelectedRadio] = useState("");
	const [selectedFilter, setSelectedFilter] = useState("");
	const radios = ["Africa", "America", "Asia", "Europe", "Oceania"];
	const tri = ["ascending", "descending"];

	useEffect(() => {
		axios
			.get("https://restcountries.com/v3.1/all")
			.then((res) => setData(res.data));
	}, []);

	return (
		<div className='countries'>
			<h1>Countries</h1>
			<div className="filter">Filter :
				{tri.map((filter) => (
					<li>
						<input
							type="radio"
							id={filter}
							name="filtre"
							onChange={(e) => setSelectedFilter(e.target.id)}
						/>
						<label htmlFor={filter}>{filter}</label>
					</li>
				))}
			</div>
			<ul className='radio-container'>
				<input className='range'
					type="range"
					min="1"
					max="250"
					defaultValue={rangeValue}
					onChange={(e) => setRangeValue(e.target.value)}
				/>
				{radios.map((continent) => (
					<li>
						<input
							className='continents'
							type="radio"
							id={continent}
							name="continentRadio"
							checked={continent === selectedRadio}
							onChange={(e) => setSelectedRadio(e.target.id)}
						/>
						<label htmlFor={continent}>{continent}</label>
					</li>
				))}
			</ul>
			{selectedRadio && (
				<button onClick={() => setSelectedRadio("")}>
					Cancel search
				</button>
			)}
			<ul>
				{data
					.filter((country) => country.continents[0].includes(selectedRadio))
					.sort((a, b) => selectedFilter === "ascending" ? a.population - b.population : b.population - a.population)
					.slice(0, rangeValue)
					.map((country, index) => (
						<Card key={index} country={country} />
					))}
			</ul>
		</div>
	);
};

export default Countries;