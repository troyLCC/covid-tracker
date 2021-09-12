
import './App.css';
import React,{useRef, useState} from 'react'
function App() {
  const [data, setData] = useState([])
  const countryInput = useRef('bangladesh')
  const fetchData = (countryName) => {
    fetch(`https://api.covid19api.com/dayone/country/${countryName}`)
    .then(response => response.json())
    .then(data =>  {
      setData(data)
    })
  }
  return (
    <div>
      {countryInput &&  <div>{countryInput.current.value}</div>}
      
        <input type="text" ref={countryInput} />
        <button onClick={fetchData(countryInput.current.value)}>Fetch Data</button>
        {data.map((d) => (
           <div> 
            <div>Date: {d.Date}</div>
            <div>Deaths: {d.Deaths}</div>
            <div>Confirmed Cases {d.Confirmed}</div>
          </div>

        ))}
    </div>
  );
}

export default App;
