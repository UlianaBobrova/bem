
$(document).ready(function () {

  // document.addEventListener('keydown', (event) => {
  //   console.log(event);
  // });

  var menuButton = $('.menu-button');
  menuButton.on('click', () => {
    $('.navbar-bottom').toggleClass('navbar-bottom--visible');
  });


  var hotelSlider = new Swiper('.hotel-slider', {
    // Optional parameters
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.hotel-slider__button__next',
      prevEl: '.hotel-slider__button__prev',
    },
    
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    effect: "coverflow",
  });
  var reviewsSlider = new Swiper('.reviews-slider', {
    // Optional parameters
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.reviews-slider__button--next',
      prevEl: '.reviews-slider__button--prev',
    },
    
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  });

  //   Яндекс карты API
  ymaps.ready(init);

  function init() {
    var myMap = new ymaps.Map("map", {
      center: [7.55, 79.85],
      zoom: 10
    }, 
    {
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
    }, 
    {
      // Опции.
      // Иконка метки будет растягиваться под размер ее содержимого.
      preset: 'islands#blackStretchyIcon',
      // Метку можно перемещать.
      draggable: true
    }),
    myPieChart = new ymaps.Placemark([
            7.55, 79.85
    ], 
    {
    // Данные для построения диаграммы.
    data: [
      {weight: 8, color: '#0E4779'},
      {weight: 6, color: '#1E98FF'},
      {weight: 4, color: '#82CDFF'}
    ],
      iconCaption: "Диаграмма"
    }, 
    {
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
  
  // Параллакс для секции Newsletter
  $('.parallax-window').parallax({imageSrc: '../img/newsletter.jpg'});

  // jquerry будет искать элементы с data-toggle-modal
  var modalButton = $("[data-toggle = modal]");
  var closeModalButton = $(".modal__close");

  modalButton.on("click", openModal);
  // on - как addEventListener
  closeModalButton.on("click", closeModal);

  // Закрытие модального окна кнопкой Esc
  $(document).on('keydown', (event) => {
    if (event.keyCode == 27)
    closeModal(event);
  });

  // Открытие модального окна
  function openModal() {
    clearInput();
    var targetModal = $(this).attr("data-href");
    $(targetModal).find(".modal__overlay").addClass("modal__overlay--visible");
    $(targetModal).find(".modal__dialog").addClass("modal__dialog--visible");
  }
  // Закратие модального окна
  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass('modal__overlay--visible');
    modalDialog.removeClass('modal__dialog--visible');
  }

  // Обработка форм
  $(".form").each(function() {
    $(this).validate({
    // errorClass: "invalid",
      messages: {
        name: {
          required: "Укажите имя",
          minlength: "Имя должно быть не короче 2 букв"
        },
        email: {
          required: "Укажите e-mail",
          email: "E-mail должен быть в формате name@domain.com"
        },
        phone: {
          required: "Телефон обязателен"
        },
        text: {
          required: "Укажите e-mail"
        }
      }
    });
  });

  //Маска для телефона
  $(document).ready(function(){
    $('.phone_us').mask('+7 (000) 000-00-00');
  });

  // очистка input-ов
  function clearInput() {
    document.querySelectorAll('input').forEach((item) => {
    item.value = ''; 
    });
  };
  // Валидация форм
  function validateForm() {
    var inputEmail = document.querySelectorAll('#email');
    var inputName = document.querySelectorAll('#name');
    var inputMessage = document.querySelectorAll('#mess');
      inputEmail.forEach((elem) => elem.addEventListener('input', (event) => {
        event.target.value = event.target.value.replace(/[^a-z\.\-\+\@\_0-9]/gi, '');
      }));

      inputName.forEach((elem) => elem.addEventListener('input', (event) => {
        event.target.value = event.target.value.replace(/[^а-я ]/gi, '');
      }));

      inputMessage.forEach((elem) => elem.addEventListener('input', (event) => {
        event.target.value = event.target.value.replace(/[^а-я\.\_0-9]/gi, '');
      }));
  }

  validateForm();

});
