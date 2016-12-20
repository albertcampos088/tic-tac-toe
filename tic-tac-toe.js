var namespace = "http://www.w3.org/2000/svg"
var currentPlayer = 1
var topleftclick = false
function game(){
  if (currentPlayer == 1){
    if (topleftclick == false) {
      var circle = document.createElementNS(namespace, "circle")
      circle.setAttribute("cx", "50")
      circle.setAttribute("cy", "50")
      circle.setAttribute("r", "50")
      circle.setAttribute("fill", "grey")
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
    square.setAttribute("fill", "black")
    var canvas = document.getElementById("game-board")
    canvas.appendChild(square)
    topleftfclick= true
    currentPlayer= 1
    }
  }
}



var topMiddleClick= false
function game2(){
  if (currentPlayer == 1){
    if (topMiddleClick == false){
      var circle = document.createElementNS(namespace, "circle")
      circle.setAttribute("cx", "150")
      circle.setAttribute("cy", "50")
      circle.setAttribute("r", "50")
      circle.setAttribute("fill", "grey")
      var canvas = document.getElementById("game-board")
      canvas.appendChild(circle)
      topMiddleClick= true
      currentPlayer= 2
    }
  }else if (currentPlayer == 2) {
    if (topMiddleClick == false){
      var square = document.createElementNS(namespace, "rect")
      square.setAttribute("x", "110")
      square.setAttribute("y", "10")
      square.setAttribute("height", "80")
      square.setAttribute("width", "80")
      square.setAttribute("fill", "black")
      var canvas = document.getElementById("game-board")
      canvas.appendChild(square)
      topMiddleClick= true
      currentPlayer= 1
    }
  }
}



  var topRightClick= false
  function game3(){
    if (currentPlayer == 1){
      if (topRightClick == false){
    var circle = document.createElementNS(namespace, "circle")
    circle.setAttribute("cx", "250")
    circle.setAttribute("cy", "50")
    circle.setAttribute("r", "50")
    circle.setAttribute("fill", "grey")
    var canvas = document.getElementById("game-board")
    canvas.appendChild(circle)
    topRightClick= true
    currentPlayer= 2
    }
}else if (currentPlayer == 2) {
  if (topRightClick == false){
    var square = document.createElementNS(namespace, "rect")
    square.setAttribute("x", "210")
    square.setAttribute("y", "10")
    square.setAttribute("height", "80")
    square.setAttribute("width", "80")
    square.setAttribute("fill", "black")
    var canvas = document.getElementById("game-board")
    canvas.appendChild(square)
    topRightClick= true
    currentPlayer= 1
    }
  }
}



var middleLeftClick= false
function game4(){
  if (currentPlayer == 1){
    if (middleLeftClick == false){
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", "50")
  circle.setAttribute("cy", "150")
  circle.setAttribute("r", "50")
  circle.setAttribute("fill", "grey")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
  middleLeftClick= true
  currentPlayer= 2
  }
}else if (currentPlayer == 2) {
  if (middleLeftClick == false){
    var square = document.createElementNS(namespace, "rect")
    square.setAttribute("x", "10")
    square.setAttribute("y", "110")
    square.setAttribute("height", "80")
    square.setAttribute("width", "80")
    square.setAttribute("fill", "black")
    var canvas = document.getElementById("game-board")
    canvas.appendChild(square)
    middleLeftClick= true
    currentPlayer= 1
    }
  }
}



var middleClick= false
function game5(){
  if (currentPlayer == 1){
    if (middleClick == false){
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", "150")
  circle.setAttribute("cy", "150")
  circle.setAttribute("r", "50")
  circle.setAttribute("fill", "grey")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
  middleClick= true
  currentPlayer= 2
  }
}else if (currentPlayer == 2) {
  if (middleClick == false){
    var square = document.createElementNS(namespace, "rect")
    square.setAttribute("x", "110")
    square.setAttribute("y", "110")
    square.setAttribute("height", "80")
    square.setAttribute("width", "80")
    square.setAttribute("fill", "black")
    var canvas = document.getElementById("game-board")
    canvas.appendChild(square)
    middleClick= true
    currentPlayer= 1
    }
  }
}



var middleRightClick= false
function game6(){
  if (currentPlayer == 1){
    if (middleRightClick == false){
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", "250")
  circle.setAttribute("cy", "150")
  circle.setAttribute("r", "50")
  circle.setAttribute("fill", "grey")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
  middleRightClick= true
  currentPlayer= 2
  }
}else if (currentPlayer == 2) {
  if (middleRightClick == false){
    var square = document.createElementNS(namespace, "rect")
    square.setAttribute("x", "210")
    square.setAttribute("y", "110")
    square.setAttribute("height", "80")
    square.setAttribute("width", "80")
    square.setAttribute("fill", "black")
    var canvas = document.getElementById("game-board")
    canvas.appendChild(square)
    middleRightClick= true
    currentPlayer= 1
    }
  }
}



var bottomLeftClick= false
function game7(){
  if (currentPlayer == 1){
    if (bottomLeftClick == false){
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", "50")
  circle.setAttribute("cy", "250")
  circle.setAttribute("r", "50")
  circle.setAttribute("fill", "grey")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
  bottomLeftClick= true
  currentPlayer= 2
  }
}else if (currentPlayer == 2) {
  if (bottomLeftClick == false){
    var square = document.createElementNS(namespace, "rect")
    square.setAttribute("x", "10")
    square.setAttribute("y", "210")
    square.setAttribute("height", "80")
    square.setAttribute("width", "80")
    square.setAttribute("fill", "black")
    var canvas = document.getElementById("game-board")
    canvas.appendChild(square)
    bottomLeftClick= true
    currentPlayer= 1
    }
  }
}



var bottomMiddleClick= false
function game8(){
  if (currentPlayer == 1){
    if (bottomMiddleClick == false){
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", "150")
  circle.setAttribute("cy", "250")
  circle.setAttribute("r", "50")
  circle.setAttribute("fill", "grey")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
  bottomMiddleClick= true
  currentPlayer= 2
  }
}else if (currentPlayer == 2) {
  if (bottomMiddleClick == false){
    var square = document.createElementNS(namespace, "rect")
    square.setAttribute("x", "110")
    square.setAttribute("y", "210")
    square.setAttribute("height", "80")
    square.setAttribute("width", "80")
    square.setAttribute("fill", "black")
    var canvas = document.getElementById("game-board")
    canvas.appendChild(square)
    bottomMiddleClick= true
    currentPlayer= 1
    }
  }
}



var bottomRightClick= false
function game9(){
  if (currentPlayer == 1){
    if (bottomRightClick == false){
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", "250")
  circle.setAttribute("cy", "250")
  circle.setAttribute("r", "50")
  circle.setAttribute("fill", "grey")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
  bottomRightClick= true
  currentPlayer= 2
  }
}else if (currentPlayer == 2) {
  if (bottomRightClick == false){
    var square = document.createElementNS(namespace, "rect")
    square.setAttribute("x", "210")
    square.setAttribute("y", "210")
    square.setAttribute("height", "80")
    square.setAttribute("width", "80")
    square.setAttribute("fill", "black")
    var canvas = document.getElementById("game-board")
    canvas.appendChild(square)
    bottomRightClick= true
    currentPlayer= 1
    }
  }
}
