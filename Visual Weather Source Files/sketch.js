var cityVal;
var weather;
var col;
var currentWeather;
var xoff=0;
var inputField;
var inputCity;
var movement;
var clouds = [];
function preload(){


    var apiId = "c10bb3bd22f90d636baa008b1529ee25"

    }
function setup() {
    noStroke();
    createCanvas(windowWidth/1.2,windowHeight/1.4);

    print("setup executed");

    fill(255);
    textSize(50);

    for(let i=0; i < 500; i++){
        let x = random(width);
        let y = random(height);
        clouds[i]=new Cloud(x,y);
    }
}

function city() {
    //print("city function executed");
    cityVal = inputCity;
    var url="http://api.openweathermap.org/data/2.5/weather?q=" + cityVal + "&units=metric" + "&APPID=c10bb3bd22f90d636baa008b1529ee25";
    loadJSON(url, gotData);


}

function gotData(data){
    weather = data;
}

function draw() {
    inputField = select("#textbox");
    inputCity = inputField.value();

    background(50);
   
    if(weather){
        currentWeather = weather.weather[0].icon;
    }
    
    ellipseMode(CENTER);
    var size=5;


    movement=map(noise(xoff),0,1,10,50);
   // var offset = 0;
    xoff+=0.007;
    //print(movement);



//conditional statements

    if(currentWeather=="01d"){
        //day: clear sky
        background(0,150,255);
        //sun
        noStroke();
        fill(255,255,0); 
        ellipse(windowWidth/2+100,windowHeight/6,100+movement,100+movement); 

    } else if (currentWeather=="02d"){
        //day: few clouds
        background(0,150,255);
        //clouds
        noStroke();
        fill(255);
        for(let i=0; i < 6; i++){
            clouds[i].display();
        }
    } else if (currentWeather=="03d"){
        //  text('dag: scattered clouds',10,90);


        background(0,150,255);
        fill(200,200,200,255);
        noStroke();

        for(let i=6; i < 26; i++){
            clouds[i].display();
        }




    } else if (currentWeather=="04d"){
        // text('dag: broken clouds',10,90);

        background(0,150,255);
        fill(200,200,200,255);
        noStroke();

        for(let i=26; i < 61; i++){
            clouds[i].display();
        }



    } else if (currentWeather=="09d"){
        // text('dag: shower rain',10,90);
        noStroke();

        background(0,100,200)
        fill(180);
        for(let i=61; i < 69; i++){
            clouds[i].display();
            clouds[i].rain();
        }


    } else if (currentWeather=="10d"){
        //  text('dag: rain',10,90);
        noStroke();

        background(0,100,200)
        fill(180);
        fill(180);
        for(let i=69; i < 99; i++){
            clouds[i].display();
            clouds[i].rain();
        }

    } else if (currentWeather=="11d"){
        // text('dag: thunderstorm',10,90);
        noStroke();
        background(0,100,200)

        for(let i=99; i < 111; i++){
            clouds[i].display();
            clouds[i].rain();
        }
        strokeWeight(7);
        stroke(255,255,0);
        line(windowWidth/8+movement, windowHeight/6+movement, windowWidth/8+60, windowHeight/6+90);
        line(windowWidth/8+movement, windowHeight/6+45+movement, windowWidth/8+60, windowHeight/6+90);
        line(windowWidth/8+movement, windowHeight/6+45+movement, windowWidth/8+60, windowHeight/6+180);

        line(windowWidth/3+movement, windowHeight/6-45+movement, windowWidth/3+60, windowHeight/6+45);
        line(windowWidth/3+movement, windowHeight/6+movement, windowWidth/3+60, windowHeight/6+45);
        line(windowWidth/3+movement, windowHeight/6+movement, windowWidth/3+60, windowHeight/6+135);

        line(windowWidth/2+movement, windowHeight/6+movement, windowWidth/2+60, windowHeight/6+90);
        line(windowWidth/2+movement, windowHeight/6+45+movement, windowWidth/2+60, windowHeight/6+90);
        line(windowWidth/2+movement, windowHeight/6+45+movement, windowWidth/2+60, windowHeight/6+180);

        line(windowWidth/1.5+movement, windowHeight/6-45+movement, windowWidth/1.5+60, windowHeight/6+45);
        line(windowWidth/1.5+movement, windowHeight/6+movement, windowWidth/1.5+60, windowHeight/6+45);
        line(windowWidth/1.5+movement, windowHeight/6+movement, windowWidth/1.5+60, windowHeight/6+135);    

    } else if (currentWeather=="13d"){

        // text('dag: snow',10,90);
        background(0,100,200)
        fill(255);
        noStroke();

        for(let i=111; i < 126; i++){
            clouds[i].display();
            clouds[i].snow();
        }


        //snowman
        stroke(150);
        strokeWeight(2);

        ellipse(width/1.1,height/1.2,150);
        ellipse(width/1.1,height/1.2-100,120);
        ellipse(width/1.1,height/1.2-180,80);



        stroke(255,100,0);
        strokeWeight(10);
        line(width/1.1-20,height/1.2-180,width/1.1-50,height/1.2-180);

    } else if (currentWeather=="50d"){
        // text('dag: mist',10,90);
        background(0,100,200)
        fill(180);

        for(let i=126; i < 146; i++){
            clouds[i].display();
            clouds[i].rain();
        }
        //mist/fog
        ellipse(windowWidth,windowHeight/6,600+movement,600+movement); 
        ellipse(windowWidth/1.2-30, windowHeight/2, 600+movement, 600+movement);
        ellipse(windowWidth/3+30, windowHeight/3+10, 600+movement, 600+movement);
        ellipse(windowWidth/4, 20, 600+movement, 600+movement);
        ellipse(windowWidth/2,windowHeight/6,600+movement,600+movement); 
        ellipse(windowWidth/1.5-30, windowHeight/2, 600+movement, 600+movement);
        ellipse(windowWidth/5+30, windowHeight/3+10, 600+movement, 600+movement);
        ellipse(windowWidth/4, 400, 1000+movement, 1000+movement);
    }  else if(currentWeather=="01n"){
        //text('dag: clear sky,10,90);
        background(0,0,100)
        noStroke();
        fill(255,200);
        ellipse(windowWidth/2+100,windowHeight/6,100+movement,100+movement); 
      } else if (currentWeather=="02n"){
        // text('dag: few clouds',10,90);
        background(0,0,100);
        noStroke();
        fill(255);
        for(let i=146; i < 152; i++){
            clouds[i].display();
        }
    } else if (currentWeather=="03n"){
        //  text('dag: scattered clouds',10,90);
        background(0,0,100);
        fill(200,200,200,255);
        noStroke();
        for(let i=152; i < 172; i++){
            clouds[i].display();
        }
    } else if (currentWeather=="04n"){
        // text('dag: broken clouds',10,90);
        background(0,0,100);
        fill(200,200,200,255);
        noStroke();
        for(let i=172; i < 200; i++){
            clouds[i].display();
        }
    } else if (currentWeather=="09n"){
        // text('dag: shower rain',10,90);
        noStroke();
        background(0,0,100);
        fill(180);
        for(let i=200; i < 208; i++){
            clouds[i].display();
            clouds[i].rain();
        }
    } else if (currentWeather=="10n"){
        //  text('dag: rain',10,90);
        noStroke();
        background(0,0,100);
        fill(180);
        fill(180);
        for(let i=208; i < 238; i++){
            clouds[i].display();
            clouds[i].rain();
        }
    } else if (currentWeather=="11n"){
        // text('dag: thunderstorm',10,90);
        noStroke();
        background(0,0,100);

        for(let i=238; i < 250; i++){
            clouds[i].display();
            clouds[i].rain();
        }
        strokeWeight(7);
        stroke(255,255,0);
        line(windowWidth/8+movement, windowHeight/6+movement, windowWidth/8+60, windowHeight/6+90);
        line(windowWidth/8+movement, windowHeight/6+45+movement, windowWidth/8+60, windowHeight/6+90);
        line(windowWidth/8+movement, windowHeight/6+45+movement, windowWidth/8+60, windowHeight/6+180);

        line(windowWidth/3+movement, windowHeight/6-45+movement, windowWidth/3+60, windowHeight/6+45);
        line(windowWidth/3+movement, windowHeight/6+movement, windowWidth/3+60, windowHeight/6+45);
        line(windowWidth/3+movement, windowHeight/6+movement, windowWidth/3+60, windowHeight/6+135);

        line(windowWidth/2+movement, windowHeight/6+movement, windowWidth/2+60, windowHeight/6+90);
        line(windowWidth/2+movement, windowHeight/6+45+movement, windowWidth/2+60, windowHeight/6+90);
        line(windowWidth/2+movement, windowHeight/6+45+movement, windowWidth/2+60, windowHeight/6+180);

        line(windowWidth/1.5+movement, windowHeight/6-45+movement, windowWidth/1.5+60, windowHeight/6+45);
        line(windowWidth/1.5+movement, windowHeight/6+movement, windowWidth/1.5+60, windowHeight/6+45);
        line(windowWidth/1.5+movement, windowHeight/6+movement, windowWidth/1.5+60, windowHeight/6+135);    

    } else if (currentWeather=="13n"){

        // text('dag: snow',10,90);
        background(0,0,100);
        fill(255);
        noStroke();

        for(let i=250; i < 265; i++){
            clouds[i].display();
            clouds[i].snow();
        }


        //snowman
        stroke(150);
        strokeWeight(2);

        ellipse(width/1.1,height/1.2,150);
        ellipse(width/1.1,height/1.2-100,120);
        ellipse(width/1.1,height/1.2-180,80);



        stroke(255,100,0);
        strokeWeight(10);
        line(width/1.1-20,height/1.2-180,width/1.1-50,height/1.2-180);

    } else if (currentWeather=="50n"){
        // text('dag: mist',10,90);
        background(0,0,100);
fill(180,255);
        for(let i=265; i < 285; i++){
            clouds[i].display();
            clouds[i].rain();
        }
                fill(180,70);

        //mist/fog
        ellipse(windowWidth,windowHeight/6,600+movement,600+movement); 
        ellipse(windowWidth/1.2-30, windowHeight/2, 600+movement, 600+movement);
        ellipse(windowWidth/3+30, windowHeight/3+10, 600+movement, 600+movement);
        ellipse(windowWidth/4, 20, 600+movement, 600+movement);
        ellipse(windowWidth/2,windowHeight/6,600+movement,600+movement); 
        ellipse(windowWidth/1.5-30, windowHeight/2, 600+movement, 600+movement);
        ellipse(windowWidth/5+30, windowHeight/3+10, 600+movement, 600+movement);
        ellipse(windowWidth/4, 400, 1000+movement, 1000+movement);


    }
}



function windowResized() {
    resizeCanvas(windowWidth/1.4,windowHeight/1.7);

    // input.position((windowWidth/2)-input.width/2-50, 775);
    //button.position(input.x + input.width, 775);

}

class Cloud {
    constructor(offsetX, offsetY) {
        this.offsetX = offsetX;
        this.offsetY = offsetY;
    }
    
    display(){
       // print("cloud.display");
        ellipse(this.offsetX,this.offsetY,30+movement,30+movement); 
        ellipse(this.offsetX-30, this.offsetY+10, 20+movement, 20+movement);
        ellipse(this.offsetX+30, this.offsetY+10, 20+movement, 20+movement);
        ellipse(this.offsetX, this.offsetY+20, 20+movement, 20+movement);
    }

    rain(){
        //print("cloud.rain");
        rect(this.offsetX+30, this.offsetY+45,3, 30);
        rect(this.offsetX, this.offsetY+50,3, 30);
        rect(this.offsetX-30, this.offsetY+45,3, 30);
    }

    snow(){
        ellipse(this.offsetX-45, this.offsetY+80,10)
        ellipse(this.offsetX, this.offsetY+100,10)
        ellipse(this.offsetX+45, this.offsetY+80,10)
    }
}
