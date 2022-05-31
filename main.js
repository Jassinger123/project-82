canvas = document.getElementById('myCanvas');
 ctx = canvas.getContext("2d");
color="red";

 var mouseEvent="empty";
var linewidth=5;

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    color=document.getElementById("Colour").value;
    linewidth=document.getElementById("width_of_the_line").value;
    radius=document.getElementById("Radius").value;
    mouseEvent = "mouseDown";

}
  canvas.addEventListener("mousemove", my_mousemove)
function my_mousemove(e) {
  
  current_position_of_mouse_x= e.clientX - canvas.offsetLeft;
  current_position_of_mouse_y= e.clientY - canvas.offsetTop;
  
  if (mouseEvent == "mouseDown") {
    console.log("current position of x and y coordinates = ")
    console.log("last position mouse x = "+current_position_of_mouse_x+ " last position mouse y = "+ current_position_of_mouse_y);
    ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=linewidth;
ctx.arc(current_position_of_mouse_x,current_position_of_mouse_y,radius,0,2*Math.PI);
ctx.stroke();
  }
}

function clear_area() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
}

canvas.addEventListener("mouseleave",my_mouse_leave)
function my_mouse_leave() {
 mouseEvent="mouseleave"
 
}

canvas.addEventListener("mouseup",my_mouse_up)
function my_mouse_up() {
 mouseEvent="mouseup"
}