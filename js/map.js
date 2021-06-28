var myMap;

// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);

function init () {
    myMap = new ymaps.Map('map', {
        // При инициализации карты обязательно нужно указать
        // её центр и коэффициент масштабирования.
        center: [55.761280, 37.641479], // Москва
        zoom: 14
        },
    );

    var myPlacemark = new ymaps.Placemark([55.758463, 37.601079], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/contacts/map.svg',
        iconImageSize: [20, 20],
        iconImageOffset: [0, 0]
    });
    myMap.geoObjects.add(myPlacemark); 

    myMap.controls.remove('searchControl');
    myMap.controls.remove('trafficControl');
    myMap.controls.remove('fullscreenControl');
    myMap.controls.remove('typeSelector');
    myMap.controls.remove('zoomControl');
    myMap.controls.remove('geolocationControl');
    myMap.controls.remove('rulerControl');
    

    var zoomControl = new ymaps.control.ZoomControl({
        options: {
            size: "small",
            position: {
                top: 350,
                right: 10,
            }
        },
    });
    myMap.controls.add(zoomControl);

    var geolocationControl = new ymaps.control.GeolocationControl({
        options: {
            position: {
                top: 416,
                right: 10,
            }
        },
    });
    myMap.controls.add(geolocationControl);
}