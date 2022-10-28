// side bar
var del = document.querySelector(".album-content");



function filesOnclick() {
    del.innerHTML = '';
    del.innerHTML = " <iframe src='./iframe_timeline/files/index.html'></iframe>";


}


function galeryOnclick() {
    del.innerHTML = '';

    del.innerHTML = " <iframe src='./iframe_timeline/galery/index.html'></iframe>";


}



function homeOnclick() {
    del.innerHTML = '';

    del.innerHTML = " <iframe src='./iframe_timeline/home/index.html'></iframe>";



}


function moreOnclick() {
    del.innerHTML = '';

    del.innerHTML = " <iframe src='./iframe_timeline/more/index.html'></iframe>";
}

function gameOnclick() {
    del.innerHTML = '';

    del.innerHTML = " <iframe src='./iframe_timeline/game/index.html'></iframe>";
}

function introduceOnclick() {
    del.innerHTML = '';

    del.innerHTML = " <iframe src='./iframe_timeline/Introduce/index.html'></iframe>";
}





window.console = window.console || function(t) {};

if (document.location.search.match(/type=embed/gi)) {
  window.parent.postMessage("resize", "*");
}



$(document).keydown(function(e) {
    if (e.keyCode == 27) { 

        console.log("esc!!");

        
   }
});















// side bar