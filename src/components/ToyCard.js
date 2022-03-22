import React, { useState } from "react";

function ToyCard({ name, image, likes, id, donate, addLike }) {
  const [currentLikes, setLikes] = useState(parseInt(likes))
  
  function handleClick (e) {
    if (e.target.name === "donate") {
      donate(e.target.id)
     } else if (e.target.name === "like") {
      setLikes(prev => prev + 1)
      console.log(currentLikes)
      addLike(e.target.id, currentLikes)
     }
    }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{currentLikes} Likes </p>
      <button onClick={handleClick} name="like" id={id} className="like-btn">Like {"<3"}</button>
      <button onClick={handleClick} name="donate" id={id} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;