

 function setup() {
     canvas = createCanvas(300,300 )
     canvas.center();
     video = createCapture(VIDEO);  
     video.size(400, 400);
     video.hide();

     poseNet = ml5.poseNet(video, modelloaded);
     poseNet.on('pose', gotPoses); 
 }

 function modelloaded() {
    console.log('poseNet Is Intialized');

 function draw() {
image(video, 0, 0, 300, 300);
 }

 function take_snapshot(){
     save('myMustacheImage.png');
 }

 function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y); 
    }
}
 }
