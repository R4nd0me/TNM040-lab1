import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import countries from 'world-countries';
import CountryInfo from './CountryInfo.jsx';
import {useParams} from "react-router-dom";

function CountryList() {
  let sortedCountries = countries.sort((a,b) => b.area - a.area);
  let filterQuery = "Antarctica";
  let filteredCountries = sortedCountries.filter((a) => a.name.common != filterQuery);
  let {countryId } = useParams();
  console.log(countryId);
 /* let detailedCountries = filteredCountries.slice(0,5); 
  let minimalCountries = filteredCountries.slice(5,15);
*/
  const [searchString, setSearchString] = useState("");
  //console.log(searchString);

  const matchSearch = country => {
    const countryName = country.name.common.toLowerCase();
    const lowerCaseSearchString = searchString.toLowerCase();
    return countryName.indexOf(lowerCaseSearchString) === 0;
  }

  const searchFilterCountries = filteredCountries.filter(matchSearch).slice(0,5);
  //console.log(searchFilterCountries);
  
  return (
    <div className = "Container">

      <input type = "text" placeholder='Search...' onChange={e => setSearchString(e.currentTarget.value)}></input>
      <div className = "Country">
      {searchFilterCountries.map((x, index) => (<CountryInfo data = {x} key = {x.cca3} maxarea={filteredCountries[0]} detailed = {index < 5}/>))}
      </div>
    </div>
  );
}

export default CountryList
