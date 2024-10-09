import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import countries from 'world-countries';
import CountryInfo from './CountryInfo.jsx';

function App() {
  let sortedCountries = countries.sort((a,b) => b.area - a.area);
  let filterQuery = "Antarctica";
  let filteredCountries = sortedCountries.filter((a) => a.name.common != filterQuery).slice(0,15);

  

  return (
    array1.map((x) => <CountryInfo data = {x} key = {x.cca3} maxarea = {array1[0]} detailed = {false}/>)
  )
}
let array1 = countries;

array1.sort((a,b) => b.area - a.area);
array1 = array1.filter((a) => a.name.common != "Antarctica").slice(0,15);

let array2 = array1.slice(0,5);
let array3 = array1.slice(5,15);
console.log(array3);
console.log(array2);

export default App
