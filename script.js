function toggleMenu() {

    let x = document.getElementById("links");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }

    let m = document.getElementById("bars");
    if (m.src.endsWith("images/menu.png")) {
        m.src = "images/cross.png";
    } else {
        m.src = "images/menu.png";
    }
}



window.onload = function (){
    if (document.getElementById('video2') != undefined){
        document.getElementById('video2').addEventListener('ended', videoHandler, false);
    } else {
        document.getElementById('content2').style.display = 'block';
        console.log("No video");
    }
};
function videoHandler(e) {
    // What you want to do after the event
    document.getElementById('content2').style.display = 'block';
    document.getElementById('video2').style.display = 'none';
}
