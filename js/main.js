
var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.slider-button__next',
      prevEl: '.slider-button__prev',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },

  });

  // ymaps.ready(init);
  // function init(){
  //     var myMap = new ymaps.Map("map", {
  //         center: [7.55, 79.85],
  //         zoom: 11
  //     });
  // }
  ymaps.ready(init);

  function init() {
      var myMap = new ymaps.Map("map", {
              center: [7.55, 79.85],
              zoom: 10
          }, {
              searchControlProvider: 'yandex#search'
          }),
  
      // Создаем геообъект с типом геометрии "Точка".
          myGeoObject = new ymaps.GeoObject({
              // Описание геометрии.
              geometry: {
                  type: "Point",
                  coordinates: [7.55, 79.85]
              },
              // Свойства.
              properties: {
                  // Контент метки.
                  iconContent: 'Я тащусь',
                  hintContent: 'Ну давай уже тащи'
              }
          }, {
              // Опции.
              // Иконка метки будет растягиваться под размер ее содержимого.
              preset: 'islands#blackStretchyIcon',
              // Метку можно перемещать.
              draggable: true
          }),
          myPieChart = new ymaps.Placemark([
            7.55, 79.85
          ], {
              // Данные для построения диаграммы.
              data: [
                  {weight: 8, color: '#0E4779'},
                  {weight: 6, color: '#1E98FF'},
                  {weight: 4, color: '#82CDFF'}
              ],
              iconCaption: "Диаграмма"
          }, {
              // Зададим произвольный макет метки.
              iconLayout: 'default#pieChart',
              // Радиус диаграммы в пикселях.
              iconPieChartRadius: 30,
              // Радиус центральной части макета.
              iconPieChartCoreRadius: 10,
              // Стиль заливки центральной части.
              iconPieChartCoreFillStyle: '#ffffff',
              // Cтиль линий-разделителей секторов и внешней обводки диаграммы.
              iconPieChartStrokeStyle: '#ffffff',
              // Ширина линий-разделителей секторов и внешней обводки диаграммы.
              iconPieChartStrokeWidth: 3,
              // Максимальная ширина подписи метки.
              iconPieChartCaptionMaxWidth: 200
          });
  
      myMap.geoObjects
          .add(new ymaps.Placemark([7.55, 79.85], {
              iconCaption: 'GRAND HILTON HOTEL'
          }, {
              preset: 'islands#greenDotIconWithCaption'
          }));
  }
  