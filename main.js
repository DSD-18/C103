// https://teachablemachine.withgoogle.com/models/wbyHW4awe/
// The code below helps to open the webcam on the screen
Webcam.set({
    width: 350,
    height: 300,
    image_format:'png',
    png_quality:90
});
camera = document.getElementById("camera");
Webcam.attach('#camera');
// below code helps to take a snap shot
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';});}
// below line helps to check ml file is loaded
console.log("version", ml5.version);
classifier= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/wbyHW4awe/",modelloaded);
function modelloaded(){
    console.log("modelloaded");
}
function check(){
    img= document.getElementById("captured_image");
    classifier.classify(img,gotResult);
}
function gotResult(error,results){
     if(error){
         console.error(error);
     }
     else{
         console.log(results);
         document.getElementById("result_object").innerHTML=results[0].label;
         document.getElementById("result_accuracy").innerHTML=results[0].confidence.toFixed(3);
     }
}