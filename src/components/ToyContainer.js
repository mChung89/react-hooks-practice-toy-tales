import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toyList, setToyList }) {

  function handleDonate (id) {
    fetch(`http://localhost:3001/toys/${id}`, {method: 'DELETE'})
    .then(resp => resp.json())
    .then(console.log('Donated'));

    const newList = toyList.filter(toys => {
      console.log('Toys',toys.id)
      return toys.id !== parseInt(id) ? true : null
    })
    setToyList(newList)
  }

  function handleLike(id, likes) {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({likes: likes})
    })
      .then(resp => resp.json())
      .then(newData => {
        const newList = toyList.map((toy) => toy.id === newData.id ? newData : toy);
        setToyList(newList)
      })
  }

  const renderToys = toyList.map(toyInfo => 
    <ToyCard
      donate={handleDonate}
      addLike={handleLike}
      name={toyInfo.name} 
      key={toyInfo.id} 
      image={toyInfo.image}
      likes={toyInfo.likes}
      id={toyInfo.id}
      />)

  return (
    <div id="toy-collection">{renderToys}</div>
  );
}

export default ToyContainer;
