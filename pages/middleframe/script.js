$(document).ready(function(){
	let position = 0;
	const slidesToShow=3;
	const slidesToScroll=2;
	const container = $('.slider-container');
	const track = $('.slider-track');
	const item = $('.slider-item');
	const btnP = $('.b-p');
	const btnN = $('.b-n');
	const itemWidth = container.width()/slidesToShow;
	const movePosition = slidesToScroll * itemWidth;

	item.each(function (index, item){
		$(item).css({
			minWidth: itemWidth, 
		});
	});

	btnN.click(function(){
		position -= movePosition;

		track.css({
			transform: `translateX(${Position}px)`
		})
	});

	btnP.click(function(){
		position += movePosition;

		track.css({
			transform: `translateX(${Position}px)`
		})
	});
});