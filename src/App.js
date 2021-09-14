import "./App.css";
import React, { useRef, useState } from "react";
function App() {
  const [mainData, setMainData] = useState([]);
  const userInput = useRef("");

  // const displayData = () => {
  //   mainData.map((data)=> {
  //     return <div>
  //       {data.cases}
  //     </div>
  //   })
  // }

  async function fetchAPI() {
    // fetch(`https://api.covid19api.com/dayone/country/india/status/confirmed`)
    //   .then((response) => response.json())
    //   .then((data) => {return data});
    const response = await fetch(`https://api.covid19api.com/dayone/country/india/status/confirmed`)
    let data = await response.json()
    setMainData(data)
    // console.log(mainData)
    // console.log(mainData[0].Country)
    
    

  };
  
  const clickHandler = () => {
    fetchAPI()
    
      
    
  };

  return (
    <div>
      <input type="text" ref={userInput} />
      <button onClick={clickHandler}>Fetch Data</button>
    {mainData.map((data) => {
      return <div>{data.Cases} </div>
    })}
     
      
    </div>
  );
}

export default App;
