var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start() {
    recognition.start();
}
recognition.onresult = function (event) {

    console.log(event);

    var Content = event.results[0][0].transcript;

    console.log(Content);
    if (Content == "selfie") {
        console.log("taking selfie --- ");
        speak();
    }
}


function speak() {
    var synth = window.speechSynthesis;
    Webcam.attach(camera);
    speak_data = "Taking your Selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

    setTimeout(function () {
        image_id = "selfie1";
        take_selfie();
        speak_data = "Taking your Selfie in 10 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    }, 5000);
    setTimeout(function () {
        image_id = "selfie2";
        take_selfie();
        speak_data = "Taking your Selfie in 15 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    }, 10000);
    setTimeout(function () {
        image_id = "selfie3";
        take_selfie();
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    }, 15000);
}

camera = document.getElementById("camera");
Webcam.set({
    width: 360,
    height: 250,
    image_format: 'jpeg',
    jpeg_quality: 90
});

Webcam.set({
    width: 360,
    height: 250,
    image_format: 'jpeg',
    jpeg_quality: 90
});

function save() {
    link = document.getElementById("link");
    image = document.getElementById("selfie1").src;
    image = document.getElementById("selfie2").src;
    image = document.getElementById("selfie3").src;
    link.href = image;
    link.click();
}

function take_selfie() {
    Webcam.snap(function (data_uri) {
        if (image_id = "selfie1") {
            document.getElementById("result1").innerHTML = '<img id="selfie1" src="' + data_uri + '"/>';
        }
        if (image_id = "selfie2") {
            document.getElementById("result2").innerHTML = '<img id="selfie2" src="' + data_uri + '"/>';
        }
        if (image_id = "selfie3") {
            document.getElementById("result3").innerHTML = '<img id="selfie3" src="' + data_uri + '"/>';
        }
    });
}