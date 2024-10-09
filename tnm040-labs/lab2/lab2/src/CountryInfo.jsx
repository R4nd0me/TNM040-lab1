import {Link} from "react-router-dom"

function CountryInfo({data, maxarea, detailed}){
    const {name, area} = data;
    let bc = "blue";
    let ratio = (area / maxarea.area) * 300 + "%";
    //console.log(area);
    let region = data.region;
    let capital = data.capital;
    console.log(data.cca3);

    // onClick = {e => {<Link to = "{cca3}"></Link>}
    return(
    <div className = {data.cca3}>
      <Link to ={"/country/" + data.cca3}>
      <p className = "CountryName" id ={data.cca3}>{name.common}
      </p>
      </Link>

      {detailed ? <div className = "region">Region: {region}</div> : <></>}

      <div className = "capital">{detailed ? "Capital: " + capital: ""}
        </div>
      <div className = "area">{area} km<sup>2</sup>
      </div>
      <div className ="bar" style = {{width : ratio}}>
      </div>
    </div>
    )
  }

  export default CountryInfo