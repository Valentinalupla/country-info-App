
import Country from "./Country"

import '../scss/components/ListCountries.scss'
function ListCountries({ dataCountries }) {
   
  return (
    <div className="containerCountries">
        {
            dataCountries.map((countrydata, index) => {
            return <Country singularCountry={countrydata} key={index} />
            }
            )
        }
        
    </div>
  )
}

export default ListCountries