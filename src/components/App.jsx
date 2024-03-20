
import '../scss/App.scss'
import ListCountries from './ListCountries';
import data from '../services/data.json';
import Filters from './Filters';
import '../scss/components/App.scss';
import { useState } from 'react';

function App() {
  const[searchValue, setSearchValue] = useState('');
  const[selectValue, setSelectValue] = useState('');

  const handleSelect = (value) => {
    setSelectValue(value);
  }
  

  const handleSearch = (value) => {
    setSearchValue(value);
  }
  const filteredCountries = data.filter((countrydata) => {
    return countrydata.name.common
    .toLowerCase()
    .includes(searchValue.toLowerCase()) 
    }).filter((countrydata) => {
      return selectValue !== '' ? countrydata.continents[0] === selectValue : true;
    });
    
    return (
      <>
      <header className="header">Country Info App</header>
      <Filters onChangeFilter={handleSearch} onSelectContinent={handleSelect}/>
      <main>
        <ListCountries dataCountries={filteredCountries}/>
      </main>
      </>
    );
  
  
  
}

export default App
