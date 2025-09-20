let boxes = document.querySelectorAll(".box");
turn=true
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was clicked");
    if(turn){
        box.innerText="X"
        turn=false
    }
    else{
        box.innerText="O"
        turn=true
    }
  });
});
