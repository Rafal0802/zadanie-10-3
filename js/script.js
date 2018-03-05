// script.js

$(function() {
	var carouselList = $("#carousel ul"); 
	var nextImage = $("#carousel .next");
	var prevImage = $("#carousel .prev");
	
	function changeImage() {
		carouselList.animate({'marginLeft': -400}, 500, moveFirstSlide);
		function moveFirstSlide () {
			var firstItem = carouselList.find("li:first");
			var lastItem =carouselList.find("li:last");
			lastItem.after(firstItem);
			carouselList.css({marginLeft:0});
		}
	} 
	setInterval(changeImage, 3000);

	nextImage.click(changeImage);

	function moveLastSlide() {
		var firstItem = carouselList.find("li:first");
		var lastItem =carouselList.find("li:last");
		firstItem.before(lastItem);
		carouselList.css({marginLeft:-400});
		carouselList.animate({marginLeft: 0}, 500);
	}
	

	prevImage.click(moveLastSlide);

	/*var interval;
  
  	interval = setInterval(function() {

  	}, 3000);
  
  	clearInterval(interval);

  	carouselList.hover(function() {
      	clearInterval(interval);
    },
    	function() {
    		interval = setInterval(function() {

    		}, 3000);
    	}
    }
  );*/
  	
});
