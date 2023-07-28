mainimageOfTheCode = document.getElementById('mainimageOfTheCode');

flag1 = document.getElementById('flag1');
flag1src = document.getElementById('pic1').src; 
//fetching the image first by id call method
flag2 = document.getElementById('flag2');
flag2src = document.getElementById('pic2').src; 
//fetching the image second by id call method
flag3 = document.getElementById('flag3');
flag3src = document.getElementById('pic3').src; 

//fetching the image third by id call method
flag4 = document.getElementById('flag4');
flag4src = document.getElementById('pic4').src; 

//fetching the image fourth by id call method
flag5 = document.getElementById('flag5');
flag5src = document.getElementById('pic5').src; 

//fetching the image fifth by id call method

pic  = mainimageOfTheCode.src;//setting the main image variable into the pic variable

//image 1 is been displayed on full screen when clicked
flag1.addEventListener("click",function displayImage(){
    mainimageOfTheCode.src = flag1src;
    document.getElementById("description").innerHTML = "This pink Flowers grow more in euqator"
}
)

//image 2 is been displayed on full screen when clicked
flag2.addEventListener("click",function displayImage(){
    mainimageOfTheCode.src = flag2src;
    document.getElementById("description").innerHTML = "This pink Flowers grow more in euqator"
}
)

//image 3 is been displayed on full screen when clicked
flag3.addEventListener("click",function(){
    this.src = flag3src;
    document.getElementById("description").innerHTML = "This pink Flowers grow more in euqator"
 
}
)
flag1.addEventListener("click",function(){
    mainimageOfTheCode.src = flag1src;
}
)






// Display an image to display bar
function displayImage(img) {
	display.querySelector('img').setAttribute('src', img.getAttribute('src').replace('small', 'large'));
	display.querySelector('img').setAttribute('alt', img.getAttribute('alt'));
	
	
}

