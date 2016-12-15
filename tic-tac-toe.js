var namespace = "http://www.w3.org/2000/svg"
var currentPlayer = 1
var topleftclick = false
function game(){
  if (currentPlayer == 1){
    if (topleftclick == false) {
      var circle = document.createElementNS(namespace, "circle")
      circle.setAttribute("cx", "0")
      circle.setAttribute("cy", "0")
      circle.setAttribute("r", "50")
      circle.setAttribute("fill", "grey")
      var canvas = document.getElementById("game-board")
      canvas.appendChild(circle)
      topleftclick= true
      currentPlayer= 2
  }
