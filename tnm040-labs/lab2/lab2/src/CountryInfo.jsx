
function CountryInfo({data, maxarea, detailed}){
    const {name, area, cca3} = data;
    let bc = "blue";
    let ratio = (area / maxarea.area) * 300 + "%";
    //console.log(area);
    let region = data.region;
    let capital = data.capital;
    console.log(data);
    console.log(detailed);
    
    return(
    <div className = {cca3}>
      <a className = "CountryName" id ={cca3}>{name.common}
      </a>


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