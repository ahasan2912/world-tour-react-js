import { useState } from 'react';
import './Country.css';
const Country = ({country, handlenVisitedCountry, handleVisitedFlags}) => {

    const {name, flags, population, area, cca3} = country;
    const [Visited, setvisited] = useState(false);

    const handlenVisited = () =>{
        setvisited(!Visited);
    }
    return (
        <div className={`country ${Visited ? 'visited' : 'non-visited'}`}>
            <h3 style={{color: Visited ? 'Purple' : 'white'}}>Name: {name?.common}</h3>
            <img src={flags?.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={() => handlenVisitedCountry(country)}>Mark Visited</button>
            <br />
            <br />
            <button onClick={()=>handleVisitedFlags(country.flags.png)}>Add Flag</button>
            <br /><br />
            <button onClick={handlenVisited}>Visited</button>
            { Visited ? "I have visited this country" : "I have now in this Country."}
        </div>
    );
};

export default Country;