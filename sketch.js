const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;
function preload() {
    // create getBackgroundImg( ) here

    getBackgroundImg()
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

    

}

function draw(){
    if(backgroundImg){

        background(backgroundImg)
    }

    // add condition to check if any background image is there to add


    Engine.update(engine);

    // write code to display time in correct format here



}

async function getBackgroundImg(){




    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var responseJSON = await response.json()
    
    var datetime = responseJSON.datetime

    var hour = datetime.slice(11,13);
    if (hour>=6 && hour <=7){

bg = "sunrise1.png"


    }
   else if (hour>=7 && hour <=8){

        bg = "sunrise2.png"
        
        
            }
            
   else if (hour>=9 && hour <=11){

        bg = "sunrise3.png"
        
        
            }
            else  if (hour>=11 && hour <=12){

                bg = "sunrise4.png"
                
                
                    }
                    else  if (hour>=1 && hour <=2){

                        bg = "sunrise5.png"
                        
                        
                            }
                        
                        else if (hour>=3 && hour <=4){
    
                            bg = "sunrise6.png"
                            
                            
                                }
                                else if (hour>=4 && hour <=5){
    
                                    bg = "sunrise7.png"
                                    
                                    
                                        }
                                        else if (hour>=5 && hour <=6){
    
                                            bg = "sunrise8.png"
                                            
                                            
                                                }
                                                else if (hour>=6 && hour <=7){
    
                                                    bg = "sunrise10.png"
                                                    
                                                }
                                                else if (hour>=7 && hour <=12){
    
                                                    bg = "sunrise11.png"
                                                    
                                                    
                                                        
                                                    }
                                                    else {
    
                                                        bg = "sunrise11.png"
                                                        
                                                        
                                                            
                                                        }
                            
    
    backgroundImg = loadImage(bg)
    console.log(backgroundImg)
    // write code to fetch time from API

    //change the data in JSON format

    // write code slice the datetime


    // add conditions to change the background images from sunrise to sunset


    //load the image in backgroundImg variable here

}
