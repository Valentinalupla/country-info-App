
import '../scss/App.scss'
import ListCountries from './ListCountries';
import data from '../services/data.json';
import Filters from './Filters';
import '../scss/components/App.scss';
import { useState } from 'react';

function App() {
  const[searchValue, setSearchValue] = useState('');
  const[selectValue, setSelectValue] = useState('All');

  const handleSelect = (value) => {
    setSelectValue(value);
  }
  

  const handleSearch = (value) => {
    setSearchValue(value);
  }
  const filteredCountries = data.filter((countrydata) => {
    return countrydata.name.common
    .toLocaleLowerCase()
    .includes(searchValue.toLocaleLowerCase()) === countrydata.continents.includes(selectValue);
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
