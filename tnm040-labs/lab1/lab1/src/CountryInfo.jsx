
function CountryInfo({data, maxarea, detailed}){
    const {name, area, cca3, region} = data;
    let bc = "blue";
    let ratio = (area / maxarea.area) * 300 + "%";
    //console.log(area);
    let style1= "right:" + ratio;
    console.log(name.common)
    console.log(detailed)
    
    return(
      <div className = "Container">
      <a className = "CountryName" id ={cca3}>{name.common}</a> 
        <div className = "region">{region}</div>
        <div className = "area">{area} km<sup>2</sup></div>
        <div className ="bar" style = {{width : ratio}}>
        </div>
        {region ? "true" : "false"}
    </div>
    )
  }

  export default CountryInfo