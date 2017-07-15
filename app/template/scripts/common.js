$(document).ready(function($) {

	/* Sliders */
	$('.new-ads__list').slick({
		slidesToShow: 3
	});

	$('.questions__list').slick();

	/* Yandex Map */
	ymaps.ready(init);
	var myMap;

	function init(){
	  myMap = new ymaps.Map ("map", {
		  center: [55.741869, 37.652546],
		  zoom: 10
	  });

	  myMap.controls.remove('searchControl').remove('trafficControl').remove('geolocationControl');

	  myMap.behaviors.disable(['drag', 'scrollZoom']);

	  myPin = new ymaps.GeoObjectCollection({}, {
		iconLayout: 'default#image',
		iconImageHref: 'upload/marker.png',
		iconImageSize: [38, 48]
	  });

	  myPlacemark1 = new ymaps.Placemark([55.741869, 37.652546], {
		balloonContentBody: 'м. Таганская (кольцевая), ул. Нижняя Радищевская 14/2, строение 1, 3 этаж, офис 1'
	  });


	  myPin.add(myPlacemark1);

	  myMap.geoObjects.add(myPin);
	}
});