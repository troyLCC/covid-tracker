
import './App.css';
import React,{useRef} from 'react'
function App() {
  const countryInput = useRef(null)
  const fetchData = (countryName) => {
    fetch(`https://api.covid19api.com/dayone/country/${countryName}`)
    .then(response => response.json())
    .then(data => console.log(data))
  }
  return (
    <div>
        <input type="text" ref={countryInput} />
        <button onClick={fetchData(countryInput.current.value)}>Fetch Data</button>
    </div>
  );
}

export default App;
