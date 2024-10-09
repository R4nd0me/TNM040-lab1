import {BrowserRouter, Routes, Route} from "react-router-dom";
import CountryList from "./CountryList.jsx";
import CountryDetails from "./CountryDetails.jsx";

export default function App(){

  return(
    <BrowserRouter>
    <Routes>
      <Route path = "/">
        <Route index element ={<CountryList/>}/>
        <Route path = "country" element = {<p>Hello World</p>}>

        </Route>
        <Route path = "/country/:countryId" element ={<CountryDetails/>}>
        </Route>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}
