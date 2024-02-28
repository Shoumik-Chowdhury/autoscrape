// import { useState } from "react";

const getResults = () => {
  fetch('http://localhost:3000/getResults')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('RESPONSE DATA', data)
    })
    .catch(error => {
      console.error('getResult fetch error [/search]:', error);
    });
}

// const [vehicle, setVehicle] = useState([]);

export default function Search() {
  return (
    <>
      <form>
        <label>Search</label>
        <input type="text" name="model"></input>
        <button onClick={getResults()} type="submit">Go</button>
      </form>
      <div>
        
      </div>
    </>
  )
}