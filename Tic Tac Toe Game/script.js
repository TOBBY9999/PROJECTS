let resetbutton = document.querySelector("#reset-button");
let boxes = document.querySelectorAll(".box");
let newgamebtn=document.querySelector("#new-btn")
let msgcontainer=document.querySelector(".msg-container")
let msgwinner=document.querySelector("#msg") 

let turnofplayer = true;
const winpatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
const resetgame=()=>{
  turnofplayer=true
  enableboxes()
   msgcontainer.classList.add("hide")
}
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was clicked");
    if (turnofplayer) {
      box.innerText = "O";
      turnofplayer = false;
    } else {
      box.innerText = "X";
      turnofplayer = true;
    }
    box.disabled = true;
    checkwinner();
  });
});
const disableboxes =()=>{
  for(let box of boxes){
    box.disabled=true;
  }
}
const enableboxes =()=>{
  for(let box of boxes){
    box.disabled=false;
    box.innerText="";
  }
}
const showwineer=(winner)=>{
  msg.innerText=`Congratulations,winner is ${winner}`
  msgcontainer.classList.remove("hide")
  disableboxes();

}
const checkwinner = () => {
  for (let pattern of winpatterns) {
    let position1val = boxes[pattern[0]].innerText;
    let position2val = boxes[pattern[1]].innerText;
    let position3val = boxes[pattern[2]].innerText;

    if (position1val != "" && position2val != "" && position3val != "") {
      if (position1val === position2val && position2val === position3val) {
        console.log("WINNER",position1val);
        showwineer(position1val)
      }
    }

    // console.log([pattern[0]], [pattern[1]], [pattern[2]]);

    // console.log(boxes[pattern[0]].innerText, boxes[pattern[1]].innerText, boxes[pattern[2]].innerText);
  }
};

newgamebtn.addEventListener("click",resetgame)

resetbutton.addEventListener("click",resetgame)
