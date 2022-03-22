import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toyList, setToyList] = useState([])
  function handleClick() {
    setShowForm((showForm) => !showForm);
  }
  
  useEffect(() => {
    fetch('http://localhost:3001/toys')
    .then(resp => resp.json())
    .then(data => setToyList(data))
  },[toyList])

  function addToy (newToy) {
    fetch('http://localhost:3001/toys', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({...newToy, likes: 0})
      })
      .then(resp => resp.json())
      .then(newToy => setToyList([...toyList, newToy]))
  }


  return (
    <>
      <Header />
      {showForm ? <ToyForm addToy={addToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer setToyList={setToyList} toyList={toyList} />
    </>
  );
}

export default App;
