import '../scss/components/Country.scss'

function Country({singularCountry}) {
  return (
    <div className="country">
        <span>{singularCountry.flag}
        </span>
        <h5>{singularCountry.name.common}</h5>
        <span>{singularCountry.capital}</span> <br />
        <span>{singularCountry.continents}</span>
    </div>
  )
}

export default Country