 function setup() {

  video =  createCapture(VIDEO); 
  video.size(550,500);
  

  canvas = createCanvas(550,530);
  canvas.position(560,100);

  poseNet = ml5.poseNet(video,modelLoaded);
  poseNet.on('pose',gotPoses);



 }

 function modelLoaded(){

    console.log('Posenet model is initiailzed');
 }

 function draw() {

    background('#b778c2');

 }

 function gotPoses(results) {

    if(results.length > 0) {

      console.log(results);

    }
 }


 