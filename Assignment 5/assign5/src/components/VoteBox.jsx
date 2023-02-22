import React from "react";
import "./style/VoteBox.css";
const VoteBox = (prob) => {
  let Increase = () => {prob.callback(1)};
  let Decrease = () => {prob.callback(-1)};
  return (
    <div class="container">
      <button onClick={Increase} class="btn">
        Click to Vote
      </button>
      <div id="score">{prob.score === 0?"MIN":prob.score === 10?"MAX":prob.score}</div>
      <button onClick={Decrease} class="btn">
        Click to Unvote
      </button>
    </div>
  );
};

export default VoteBox;
