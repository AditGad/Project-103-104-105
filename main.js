Webcam.set({
width:350,
height:300,
image_format:"png",
png_quality:90
});
Webcam.attach("#camera");
function Takesnapshot(){
    Webcam.snap(function(imagecapture){
        document.getElementById("result").innerHTML="<img id='captured_Image'src='"+imagecapture+"'/>";
    });
}
console.log("ml5 version",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/jETde1VDX/model.json",modelloaded);
function modelloaded(){
    console.log("modelloaded");
}