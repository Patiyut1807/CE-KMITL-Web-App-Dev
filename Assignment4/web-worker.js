let i=-1
let bg =["red","green","blue","lightpink","limegreen","deepskyblue"]
let color =["white","lightgray","silver","saddlebrown","red","yellow"]
let timedCount = ()=>{
    i = i==5?0:i+1

  let date = new Date() 
  postMessage({date,color:color[i],bg:bg[i]});
  setTimeout("timedCount()",1000);
}

timedCount();