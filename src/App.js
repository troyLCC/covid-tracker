import "./App.css";
import React, { useRef, useState } from "react";
function App() {
  const [mainData, setMainData] = useState([]);
  const userInput = useRef("");
  const from = useRef("")
  const to = useRef("")

  async function fetchAPI(country) {
    const response = await fetch(
      `https://api.covid19api.com/dayone/country/${country}/status/confirmed`
    );
    let data = await response.json();
    // let slicedData = data.slice(0, 15);

    setMainData(data);
    console.log(mainData);
    // console.log(mainData[0].Country)
  }

  const clickHandler = () => {
    fetchAPI(userInput.current.value);
    // console.log(typeof(from.current.value))
    // console.log(typeof(to.current.value))
  };

  return (
    <div>
      <input type="text" ref={userInput} />
      <label htmlFor="from">From</label>
      <input type="date" id="from" ref={from} />
      <label htmlFor="to">To</label>
      <input type="date" id="ending-to" ref={to}/>
      <button onClick={clickHandler}>Fetch Data</button>
      
      {mainData.map((data) => {
        const currentDate = new Date(data.Date)
        const startingDate = new Date(from.current.value)
        const endingDate = new Date(to.current.value)
        
        if(currentDate >=startingDate && currentDate <=endingDate){
          return (
            <div>
              <div> Lat: {data.Lat}</div>
              <div> Long: {data.Lon}</div>
              <div><bold> Cases:</bold>{data.Cases} cases confirmed </div>
              <div> <bold> Date:</bold>{data.Date.slice(0,-10)}</div>
            </div>
          );
        }
        
      })}
    </div>
  );
}

export default App;
