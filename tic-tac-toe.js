
var namespace = "http://www.w3.org/2000/svg"
var currentPlayer = 1
var topleftclick = false
function game(){
  if (currentPlayer == 1){
    if (topleftclick == false) {
      var circle = document.createElementNS(namespace, "circle")
      circle.setAttribute("cx", "5")
      circle.setAttribute("cy", "5")
      circle.setAttribute("r", "50")
      circle.setAttribute("fill", "black")
      var canvas = document.getElementById("game-board")
      canvas.appendChild(circle)
      topleftclick= true
      currentPlayer= 2
  }
}else if (currentPlayer == 2){
  if (topleftclick == false) {
    var square = document.createElementNS(namespace, "rect")
    square.setAttribute("x", "10")
    square.setAttribute("y", "10")
    square.setAttribute("height", "80")
    square.setAttribute("width", "80")
    square.setAttribute("fill", "grey")
    var canvas = document.getElementById("game-board")
    canvas.appendChild(square)
    topleftfclick= true
    currentPlayer= 1
    }
  }
}
