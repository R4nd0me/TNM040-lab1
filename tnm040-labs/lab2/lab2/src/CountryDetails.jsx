import countries from 'world-countries';
import CountryInfo from './CountryInfo.jsx';
import {useParams} from "react-router-dom";

export default function CountryDetails(){
    let {countryId} = useParams();
    let selectedCountry = countries.filter((a) => a.cca3 == countryId);
    console.log(selectedCountry);
    return (
        <div className = "Container">
            <input type = "text" placeholder='Search...' onChange={e => setSearchString(e.currentTarget.value)}></input>
            <div className = "Country">
            </div>
        </div>
    );
}