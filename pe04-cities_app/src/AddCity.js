import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddCity({ onAddCity }) {
  const [cityData, setCityData] = useState({
    cityName: '',
    country: '',
    population: '',
  });
  const navigate = useNavigate();

  const handleAddCity = () => {
    const newCity = {
      id: nextId++,
      cityName: cityData.cityName,
      country: cityData.country,
      population: cityData.population,
    };

    onAddCity(newCity);

    setCityData({
      cityName: '',
      country: '',
      population: '',
    });
    
    navigate('/');
  };

  return (
    <div>
      <h2>Add City</h2>
      <input
        placeholder="City Name"
        value={cityData.cityName}
        onChange={e =>
          setCityData(prevData => ({
            ...prevData,
            cityName: e.target.value,
          }))
        }
      /> <br />
      <input
        placeholder="Country"
        value={cityData.country}
        onChange={e =>
          setCityData(prevData => ({
            ...prevData,
            country: e.target.value,
          }))
        }
      /> <br />
      <input
        placeholder="Population"
        value={cityData.population}
        onChange={e =>
          setCityData(prevData => ({
            ...prevData,
            population: e.target.value,
          }))
        }
      /> <br />
      <button onClick={handleAddCity}>Add City</button>
    </div>
  );
}

let nextId = 3;

export default AddCity;