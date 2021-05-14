var background_imgTag = [];
var car_height = 70;
var car_width = 120;
var car_x = 10;
var car_y = 10;
var car2_height = 70;
var car2_width = 120;
var car2_x = 10;
var car2_y = 100;
var background_img = "download (1).png";
var car_img = "car1.png";
var car2_img = "car1.png";
var keyPressed;
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

function add(){
    background_imgTag = new Image();
    background_imgTag.onload = upload_background;
    background_imgTag.src = background_img;

    car_imgTag = new Image();
    car_imgTag.onload = upload_car;
    car_imgTag.src = car_img;

    car2_imgTag = new Image();
    car2_imgTag.onload = upload_car2;
    car2_imgTag.src = car2_img;
}
function upload_background(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function upload_car(){
    ctx.drawImage(car_imgTag, car_x, car_y, car_width, car_height);
}

function upload_car2(){
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);

}

window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '38')
    {
        up();
        console.log('up');
    }
    if(keyPressed == "40")
    {
        down();
        console.log('down');
    }
    if(keyPressed == "37")
    {
        left();
        console.log('left');
    }
    if (keyPressed == '39'){
        right();
        console.log("right");
    }
    if(keyPressed == '87')
    {
        w();
        console.log('w');
    }
    if(keyPressed == "65")
    {
        a();
        console.log('a');
    }
    if(keyPressed == "83")
    {
        s();
        console.log('s');
    }
    if (keyPressed == '68'){
        d();
        console.log("d");
    }
    if(car2_x > 500){
        console.log('car2 won');
        document.getElementById('game_status').innerHTML = "Car2 has won!";
        
    }else if(car_x >= 500){
        console.log('car1 won');
        document.getElementById('game_status').innerHTML = "Car1 has won!";
    }
}
function up(){
    if(car_y >=0)
    {
      car_y = car_y - 10;
      console.log("When up arrow key is pressed, x = " + car_x + "| y = " + car_y);
      upload_background();
      upload_car();
      upload_car2();
    }
}
function down(){
    if(car_y <=500)
    {
      car_y = car_y + 10;
      console.log("When up arrow key is pressed, x = " + car_x + "| y = " + car_y);
      upload_background();
      upload_car();
      upload_car2();
    }
}
function left(){
    if(car_x >=0)
    {
      car_x = car_x - 10;
      console.log("When up arrow key is pressed, x = " + car_x + "| y = " + car_y);
      upload_background();
      upload_car();
      upload_car2();
    }
}
function right(){
    if(car_x <=700)
    {
      car_x = car_x + 10;
      console.log("When up arrow key is pressed, x = " + car_x + "| y = " + car_y);
      upload_background();
      upload_car();
      upload_car2();
    }
}
if(car_x >= 500){
    console.log('car1 won');
    document.getElementById('game_status').innerHTML = "Car1 has won!";
}

function w(){
    if(car2_y >=0)
    {
      car2_y = car2_y - 10;
      console.log("When up arrow key is pressed, car2 x = " + car2_x + "| y = " + car2_y);
      upload_background();
      upload_car();
      upload_car2();
    }
}
function s(){
    if(car2_y <=500)
    {
      car2_y = car2_y + 10;
      console.log("When up arrow key is pressed, car2 x = " + car2_x + "| y = " + car2_y);
      upload_background();
      upload_car();
      upload_car2();
    }
}
function a(){
    if(car2_x >=0)
    {
      car2_x = car2_x - 10;
      console.log("When up arrow key is pressed, car2 x = " + car2_x + "| y = " + car2_y);
      upload_background();
      upload_car();
      upload_car2();
    }
}
function d(){
    if(car2_x <=700)
    {
      car2_x = car2_x + 10;
      console.log("When up arrow key is pressed, car2 x = " + car2_x + "| y = " + car2_y);
      upload_background();
      upload_car();
      upload_car2();
    }
}
if(car2_x > 500){
    console.log('car2 won');
    document.getElementById('game_status').innerHTML = "Car2 has won!";
}
