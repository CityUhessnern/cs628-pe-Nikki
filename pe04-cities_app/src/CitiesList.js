import React from 'react';
import { Link, Outlet} from 'react-router-dom';

function CitiesList({ citiesData }) {
  return (
    <div>
      <h2>Cities List</h2>
      <div>
        <ul>
          {citiesData.map(city => (
            <li key={city.id}>
              <Link to={`/city/${city.id}`}>{city.cityName}</Link>
            </li>
          ))}
        </ul>
      </div>
      <Outlet />
    </div>
  );
}

export default CitiesList;