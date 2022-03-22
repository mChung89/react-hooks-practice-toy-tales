import React,{ useState } from "react";

function ToyForm({ addToy }) {
  const [formData, setFormData] = useState({name: "", image: ""})

  function handleChange (e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  function onSubmit (e) {
    e.preventDefault()
    console.log(formData)
    addToy(formData)
  }

  return (
    <div className="container">
      <form onSubmit={onSubmit} className="add-toy-form">
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          value={formData.name}
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="image"
          value={formData.image}
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={handleChange}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
