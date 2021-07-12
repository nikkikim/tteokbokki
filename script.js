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
var isMobile = false;
if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    isMobile = true;
    document.write("mobile device");
    console.log("mobile");
}else{
    isMobile = false;

    // document.writeln("<div style='position:fixed;width:100%;height:100%;top:0px;left:0px;background-color:black;'><img style='width:50%;margin:0 auto;display:block;' src='menu.png'></div>");
    // document.writeln("<style>body{margin:0;}</style><div style='width:100%;height:100%;background-color:black;'><img style='width:60%;margin: auto;display: block;' src='menu.png'></div>");
    // document.writeln("<style>body{margin:0;}</style><div style='width:100%;height:100%;background-color:black;'><img style='width:30%;margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;display:block;' src='color.jpeg'></div>");
    document.writeln("<style>body{margin:0;}</style><div style='width:100%;height:100%;background-color:black;'><img style='width:30%;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);' src='color.jpeg'></div>");
    // window.stop();
}

window.onload = function (){
    if (!isMobile){
        document.getElementById('content2').style.display = 'none';
    } else {
        document.getElementById('content2').style.display = 'block';
    }
    // if (document.getElementById('video2') != undefined){
    //     document.getElementById('video2').addEventListener('ended', videoHandler, false);
    // } else {
    //     document.getElementById('content2').style.display = 'block';
    //     console.log("No video");
    // }
};
function videoHandler(e) {
    // What you want to do after the event
    document.getElementById('content2').style.display = 'block';
    document.getElementById('video2').style.display = 'none';
}
