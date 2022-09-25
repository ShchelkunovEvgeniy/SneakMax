ymaps.ready(init);
   function init() {
      //Создание карты
      const myMap = new ymaps.Map("map", {
         center: [50.76, 37.64],
         zoom: 7
      });
   }