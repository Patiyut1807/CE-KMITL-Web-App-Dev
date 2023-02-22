import React from "react";
import "./style/Card.css";
import VoteBox from "./VoteBox";
import { useState } from "react";

function Card({...probs}) {
  console.log(probs);
  let [score, setScore] = useState(0);
  let updateScore = (signal) => {
    if (signal === 1) {
      if (score < 10) {
        setScore(score + 1);
      } else alert("Cannot Vote more");
    }
    if (signal === -1) {
      if (score > 0) {
        setScore(score - 1);
      } else alert("Cannot unvote");
    }
  };

  return (
    <div id="card">
      <div id="info">
        <div id="text-info">
          <h2>{probs.topics}</h2>
          <h3>{probs.name}</h3>
          <p>{probs.detail}</p>
        </div>
        <img src={probs.imgSrc} alt="" />
      </div>
      <VoteBox score={score} callback={updateScore} />
    </div>
  );
}

export default Card;
