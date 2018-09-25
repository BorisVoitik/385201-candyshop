'use strict';

var goodsArray = [];


var namesArray = [
  'Чесночные сливки',
  'Молочная хрюша',
  'Грибной шейк',
  'Баклажановое безумие',
  'Паприколу итальяно',
  'Нинзя-удар васаби',
  'Хитрый баклажан',
  'Горчичный вызов',
  'Кедровая липучка',
  'Корманный портвейн',
  'Чилийский задира',
  'Беконовый взрыв',
  'Арахис vs виноград',
  'Сельдерейная душа',
  'Початок в бутылке',
  'Чернющий мистер чеснок',
  'Раша федераша',
  'Кислая мина',
  'Кукурузное утро',
  'Икорный фуршет',
  'Новогоднее настроение',
  'С пивком потянет',
  'Мисс креветка',
  'Бесконечный взрыв',
  'Невинные винные',
  'Бельгийское пенное',
  'Острый язычок'
];


var picturesArray = [
  'img/cards/gum-cedar.jpg',
  'img/cards/ice-cucumber.jpg',
  'img/cards/marmalade-beer.jpg',
  'img/cards/marshmallow-beer.jpg',
  'img/cards/soda-cob.jpg',
  'img/cards/gum-chile.jpg',
  'img/cards/ice-eggplant.jpg',
  'img/cards/marmalade-caviar.jpg',
  'img/cards/marshmallow-shrimp.jpg',
  'img/cards/soda-garlic.jpg',
  'img/cards/gum-eggplant.jpg',
  'img/cards/ice-garlic.jpg',
  'img/cards/marmalade-corn.jpg',
  'img/cards/marshmallow-spicy.jpg',
  'img/cards/soda-peanut-grapes.jpg',
  'img/cards/gum-mustard.jpg',
  'img/cards/ice-italian.jpg',
  'img/cards/marmalade-new-year.jpg',
  'img/cards/marshmallow-wine.jpg',
  'img/cards/soda-russian.jpg',
  'img/cards/gum-portwine.jpg',
  'img/cards/ice-mushroom.jpg',
  'img/cards/marmalade-sour.jpg',
  'img/cards/soda-bacon.jpg',
  'img/cards/gum-wasabi.jpg',
  'img/cards/ice-pig.jpg',
  'img/cards/marshmallow-bacon.jpg',
  'img/cards/soda-celery.jpg'
];


var contentsArray = [
  'молоко',
  'сливки',
  'вода',
  'пищевой краситель',
  'патока',
  'ароматизатор бекона',
  'ароматизатор свинца',
  'ароматизатор дуба, идентичный натуральному',
  'ароматизатор картофеля',
  'лимонная кислота',
  'загуститель',
  'эмульгатор',
  'консервант: сорбат калия',
  'посолочная смесь: соль, нитрит натрия',
  'ксилит',
  'карбамид',
  'вилларибо',
  'виллабаджо'
];


var sugarAbout = Math.random () >= 0.5;


var getRandomStrict = function (str) {
  return Math.random() - 0.5;
};


var getRandomFromRange = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};


var getGoods = function () {
  for (var i = 0; i < 26; i++) {
		
  var goodsObject = {
      name: '',
      picture: '',
      amount: '',
      price: '',
      weight: '',
      rating: {
        value: '',
        number: '',
      },
      nutritionFacts: {
        sugar: '',
        energy: '',
        contents: '',
      }
};

  goodsObject.name = namesArray.sort(getRandomStrict)[0];
  goodsObject.picture = picturesArray.sort(getRandomStrict)[0];
  goodsObject.amount = getRandomFromRange (0, 20);
  goodsObject.price = getRandomFromRange (100, 1500);
  goodsObject.weight = getRandomFromRange (30, 300);
  goodsObject.rating.value = getRandomFromRange (1, 5);
  goodsObject.rating.number = getRandomFromRange (10, 900);
  goodsObject.nutritionFacts.sugar = sugarAbout;
  goodsObject.nutritionFacts.energy = getRandomFromRange (70, 500);
  goodsObject.nutritionFacts.contents = contentsArray.sort(getRandomStrict)[0];

  goodsArray.push(goodsObject);

  }

  return goodsArray;

};
getGoods();


var uselessCatalogCards = document.querySelector('.catalog__cards--load');
var uselessCatalogLoad = document.querySelector('.catalog__load');

uselessCatalogCards.classList.remove('catalog__cards--load');
uselessCatalogLoad.classList.add('visually-hidden');


var addGoodsCardItems = function (picture) {
  var template = document.querySelector ('#card').content;
  for (var i = 0; i < picture; i++) {
    var newGoodsCard = template.cloneNode(true);
  }

  var getCardsAmount = function (allCards) {
  var cardsCatalog = document.querySelector('.catalog__card');
    if (allCards >= 1 && allCards <= 5) {
      cardsCatalog.classList.add('card--little');
    } else if (allCards = 0) {
      cardsCatalog.classList.add('card--soon');
    } else {
      cardsCatalog.classList.add('card--in-stock');
    }
  };
  getCardsAmount(goodsArray[goodsObject.amount]);


  var addCardTitles = function (title) {
    var cardTitle = document.querySelector('.card__title');
    cardTitle.textContent = title;
  };
  addCardTitles(goodsArray[goodsObject.name]);


  var addCardPriceAndWeight = function (price, weight) {
    var cardPrice = document.querySelector ('.card__price');
    var cardWeight = document.querySelector ('.card__weight');
    cardPrice.textContent = price;
    cardWeight.textContent = '/ ' + weight + ' Г';
  };
  addCardPriceAndWeight (goodsArray[goodsObject.price], goodsArray[goodsObject.weight]);


  var getRatingStars = function (stars) {
		var ratingStars = document.querySelector ('.stars__rating');
    if (stars === 1) {
      ratingStars.classList.add ('stars__rating--one');
    } else if (stars === 2) {
      ratingStars.classList.add ('stars__rating--two');
    } else if (stars === 3) {
      ratingStars.classList.add ('stars__rating--three');
    } else if (stars === 4) {
      ratingStars.classList.add ('stars__rating--four');
    } else {
      ratingStars.classList.add ('stars__rating--five');
    }
  };
  getRatingStars(goodsArray[goodsObject.rating.value]);


  var addStarCounts = function (rating) {
    var starRating = document.querySelector('.star__count');
    starRating.textContent = rating;
  };
  addStarCounts(goodsArray[goodsObject.rating.number]);


  var getSugarFacts = function (isSugarAvailable) {
    var sugarFact = document.querySelector('.card__characteristic');
    if (isSugarAvailable) {
      sugarFact.textContent = 'Содержит сахар';
    } else {
      sugarFact.textContent = 'Без сахара';
    }
  };
  getSugarFacts(goodsArray[goodsObject.nutritionFacts.sugar]);


  var addContentsCards = function (content) {
    var cardsContentComposition = document.querySelector('.card__composition-list');
    cardsContentComposition.textContent = content;
  };
  addStarCounts(goodsArray[goodsObject.nutritionFacts.contents]);


};
addGoodsCardItems(goodsArray[goodsObject.picture]);


var cardAddedArray = [];

var addCardAddedItems = function () {
  var template = document.querySelector ('#card-order').content;
  for (var i = 0; i < 3; i++) {
    var cardElements = template.cloneNode(true);
    cardAddedArray.push(cardElements);
  }

  var addOrderCardsTitle = function (name) {
    var orderCardTitle = cardAddedArray.querySelector('.card-order__title');
    orderCardTitle.textContent = name;
  };
  addOrderCardsTitle(goodsArray[goodsObject.name]);

  var addCardOrderPrice = function (price) {
    var orderCardPrice = cardAddedArray.querySelector('.card-order__price');
    orderCardPrice.textContent = price;
  };
  addCardOrderPrice(goodsArray[goodsObject.price]);


  var newTemplate = document.querySelector ('.goods__cards');
  newTemplate.appendChild(cardAddedArray);

};
addCardAddedItems();


var uselessGoodsCards = document.querySelector('.goods__cards');
var uselessCardEmpty = document.querySelector('.goods__card-empty');

uselessGoodsCards.classList.remove('goods__cards--empty');
uselessCardEmpty.classList.add('visually-hidden');
