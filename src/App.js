import './App.css';
import { useState } from 'react';
import Axios from 'axios'
import Products from "./Products"

function App() {

  const [search,setsearch] = useState("");
  const [data,setdata] =useState([]);

  const your_app_id = "39567d20";
  const your_app_key = "275db54bcba574dd7f00486d7da5acad"; 

  var url = `https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=${your_app_id}&app_key=${your_app_key}`

  async function getRecipes(){
    var result = await Axios.get(url);
    setdata(result.data.hits);
    console.log(result);
  }

  function handleClick(e){
    getRecipes();
    e.preventDefault();
  }


  return (
    <div className="App">
        <center>
          <h1>🍔 Food Recipe Plaza 🍔</h1>
          <form onSubmit={handleClick}>
            <input className='input__name' type='text' value = {search} onChange={(e) => setsearch(e.target.value)}></input><br/>
            <input className='btn btn-primary' type='submit' value='Search'></input>
          </form>
          {data.length>= 1 ? <Products data={data}/> : null}
        </center>
    </div>
    
  );
}

export default App;
