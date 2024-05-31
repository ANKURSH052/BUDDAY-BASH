import { useState } from "react";
import data from "./data";
import List from "./List";
const App = () => {
 const[people,setPeople] =useState(data);
 
//  console.log(people);
 
  return (
    <main>
      <section className="container">
        <h2>{people.length} Birthday Today</h2>
        <section>
          <List data={people} />
        </section>
      <button className="btn btn-block" onClick={()=>setPeople([])}>clear all</button>
      </section>
    </main>
  );
 
 

};
export default App;
