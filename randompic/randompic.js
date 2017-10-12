
var imagesList = ['images/battery.jpg', 'images/colonial.jpg','images/market.jpg', 'images/pinapple.jpg','images/rainbow.jpg'];

function displayPic(){
   var ranNumber= Math.floor(Math.random() * imagesList.lenth);
   document.write('<img src="'+imagesList[ranNumber]+'"/>');
}

displayPic()

