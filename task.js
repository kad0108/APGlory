var imgBox = document.getElementById('imgs');



function addImage(imgArr){
	imgArr.forEach(function(item, index){
		var image = new Image();
		image.src = item;
		image.style.width = '100%';
		image.style.height = '100%';
		image.onload = function(){
			imgBox.appendChild(image);
		}
	})
}

var imgArr = [];
for(var i = 0; i < 6; i++){
	imgArr.push('./img/' + i + '.jpg');
}
addImage(imgArr);