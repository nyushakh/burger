ymaps.ready(init);


var placemark = [
    { 
        latitude: 59.97, 
        longitude: 30.31,
    }
];

function init(){ 
    // Создание карты.    
    var map = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [59.94, 30.32],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 12,
       
    });

    var placemark = new ymaps.Placemark([59.97, 30.31], {
    hintContent: '<div class ="map__hint">ул. Литераторов, д. 19</div>',

    },
       {
         iconLayout: 'default#image',
         iconImageHref: 'img/map/map-marker.png',
         iconImageSize: [46,57],
         iconImageOffset: [-23, -57]
    });
    var placemark1 = new ymaps.Placemark([59.94, 30.45], {
        hintContent: '<div class ="map__hint">ул. Литераторов, д. 19</div>',
    
        },
           {
             iconLayout: 'default#image',
             iconImageHref: 'img/map/map-marker.png',
             iconImageSize: [46,57],
             iconImageOffset: [-23, -57]
        });
        var placemark2 = new ymaps.Placemark([59.91, 30.48], {
            hintContent: '<div class ="map__hint">ул. Литераторов, д. 19</div>',
        
            },
               {
                 iconLayout: 'default#image',
                 iconImageHref: 'img/map/map-marker.png',
                 iconImageSize: [46,57],
                 iconImageOffset: [-23, -57]
            });
            var placemark3 = new ymaps.Placemark([59.87, 30.30], {
                hintContent: '<div class ="map__hint">ул. Литераторов, д. 19</div>',
            
                },
                   {
                     iconLayout: 'default#image',
                     iconImageHref: 'img/map/map-marker.png',
                     iconImageSize: [46,57],
                     iconImageOffset: [-23, -57]
                });


    map.geoObjects.add(placemark);

}