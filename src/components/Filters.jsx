import '../scss/components/Filters.scss';

function Filters({onChangeFilter, onSelectContinent}) {
  const handleInput = (ev) => {
    const valueSearch = ev.target.value;
    onChangeFilter(valueSearch);
  }
  const handleSelectContinent = (ev) => {
    const valueClick = ev.target.value;
    onSelectContinent(valueClick);
  }
  return (
    <div className='containerFilter'>
    <h2>Filtro</h2>
    <label htmlFor="">Country</label>
    <input className="filter" type="text"  placeholder='Busca un país' onChange={handleInput}/>
    <label htmlFor="">Continents</label>
    <select  className='filter' onChange={handleSelectContinent}>
    <option value="All">All</option>
    <option value="Africa">Africa</option>
    <option value="North America">North America</option>
    <option value="South America">South America</option>
    <option value="Europe">Europe</option>
    <option value="Asia">Asia</option>
    <option value="Oceania">Oceania</option>

    </select>
    </div>
  )
}

export default Filters
