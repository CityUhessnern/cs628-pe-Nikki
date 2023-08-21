import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import CitiesList from './CitiesList';
import AddCity from './AddCity';
import CityDetails from './CityDetails';
import './App.css';

function App() {
  const [citiesData, setCitiesData] = useState([
    { id: 1, cityName: 'Tokyo', country: 'Japan', population: '13.96 million' },
    { id: 2, cityName: 'London', country: 'United Kington', population: 8982000 },
  ]);

  const handleAddCity = newCity => {
    setCitiesData([...citiesData, newCity]);
  };

  return (
    <BrowserRouter>
      <div className="container">
        <h1>Cities Application</h1>
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/add-city">Add City</Link>
            </li>
            <li>
              <Link to="/">Cities List</Link>
            </li>
          </ul>
        </nav>
        <div className="content">
          <Routes>
            <Route path="/" element={<CitiesList citiesData={ citiesData } />}>
                {/* Nested Routing */}
                <Route path="city/:id" element={<CityDetails citiesData={ citiesData } />} />
            </Route>
            <Route exact path="/add-city" element={<AddCity onAddCity={ handleAddCity }/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;