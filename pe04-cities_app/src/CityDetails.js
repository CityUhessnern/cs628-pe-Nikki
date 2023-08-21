import React from 'react';
import { useParams } from 'react-router-dom';

function CityDetails({ citiesData }) {
  const { id } = useParams();
  const city = citiesData.find(city => city.id === parseInt(id));

  return (
    <div>
      <h2>{city.cityName} Details</h2>
      <p>Country: {city.country}</p>
      <p>Population: {city.population}</p>
    </div>
  );
}

export default CityDetails;