var img = document.createElement("img");

img.src= "http://www.randomkittengenerator.com/cats/rotator.php";

img.setAttribute("width",'110')
img.setAttribute("height","110")

target.appendChild(img);

var source = document.getElementById("source");

source.remove();