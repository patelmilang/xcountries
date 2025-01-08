import { useEffect, useState } from "react";
import axios from "axios";

const Flag = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    try{

    }catch(error){
      console.error("Error fetching data: "+error);
      
    }
    const fetchCountries = async () => {
      const result = await axios.get(
        "https://xcountries-backend.azurewebsites.net/all"
      );
      setData(result.data);
      
    };
    fetchCountries();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "10px",
        flexWrap: "wrap",
      }}
    >
       
      {data.map((item) => {
      return (  <CountryCard key={item.abbr} flag={item.flag} name={item.name} />)
      })}
    </div>
  );
};

const CountryCard = ({ flag, name }) => {
  return (
    <div
      style={{
        display: "flex",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid gray",
        flexDirection: "column",
        padding: "10px",
        width: "200px",
        height: "200px",
        textAlign:"center",
        borderRadius:"5px"
      }}
    >
      <img src={flag} alt={name} style={{ height: "100px", width: "100px" }} />
      <h3>{name}</h3>
    </div>
  );
};
export default Flag;
