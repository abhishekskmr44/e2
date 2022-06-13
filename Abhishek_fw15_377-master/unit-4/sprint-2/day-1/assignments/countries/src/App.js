import axios from "axios";
import { useEffect,useState } from "react";


const getCountries = () =>{
  return axios({
    url:"https://62a5cf65430ba53411cce9e0.mockapi.io/countries",
    method:"GET"
  });
};

const addCountry = (name) =>{
  return axios({
    url:"https://62a5cf65430ba53411cce9e0.mockapi.io/countries",
    method:"POST",
    data:{
      name
    }
  });
};

const getCities = (name)=> {
  return axios({
    url:"https://62a5cf65430ba53411cce9e0.mockapi.io/cities",
    method:"POST",
    data:{
      name
    }
  });
}

const addCities = ({name,population,country_id,country})=> {
  return axios({
    url:"https://62a5cf65430ba53411cce9e0.mockapi.io/cities",
    method:"POST",
    data:{
      name,
      population,
      country_id,
      country
    }
  });
}

const deleteCity = (id) => {
  return axios({
    url:`https://62a5cf65430ba53411cce9e0.mockapi.io/cities/${id}`,
    method:"DELETE"
  });
}


const CityForm = ({countries})=>{
  return(
    <div>
    <div>
    <input placeholder="name"/>
    </div>
    <div>
    <input placeholder="population"/>
    </div>
    <select>
    {countries.map(country=><option value = {country.name} key ={country.id}>{country.name}</option>)}
    </select>
    </div>
  )
}

const Countries = ({countries,handleAddCountry}) =>{
const [name,setName] = useState("");



  return(
    <>
    <select>
    {countries.map(country=><option value = {country.name} key ={country.id}>{country.name}</option>)}
    </select>
    <div>
    <br/>
    <input placeholder="add country name" value={name} onChange={e=>setName(e.target.value)}/>
    <button onClick={()=>handleAddCountry(name)}>ADD</button>
    </div>
    </>
  )
}

export default function App() {
  const [countries, setCountries] = useState([])
  useEffect(()=>{
     handleGetCountry()
  },[]);

  const handleGetCountry = ( ) =>{
    getCountries().then((res)=>{
      setCountries(res.data)
    })
  }

  const handleAdd = (name)=>{
    addCountry(name) .then((res)=>{
      handleGetCountry();
    });
  };


  
  console.log(countries)
  return (
    <div className="App">
      <h1>Countries</h1>
      <Countries handleAddCountry={handleAdd} countries={countries}/>


      <h1>Cities</h1>
    <CityForm countries={countries}/>


    </div>
  )
}


