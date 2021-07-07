noseX=0;
noseY=0;
rightwristX=0;
leftwristX=0;
difference=0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(500, 350);

    canvas= createCanvas(500, 500);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet Is Intialized !!');

}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}

function draw()
{
  background('#FF5733')  
}