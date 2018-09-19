var goodsArray = [];

var getGoods = function () {
	for (i = 0; i < 26; i++) {
		
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
			},
		}

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
  		
  		function randomNames (a, b) {
        	return Math.random() - 0.5;
      	};


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

		function randomPictures (a, b) {
        	return Math.random() - 0.5;
      	};

  		var getAmount = function (min, max) {
  			return Math.floor(Math.random() * (max - min + 1)) + min;
  		};

  		var getPrice = function (min, max) {
  			return Math.floor(Math.random() * (max - min + 1)) + min;
  		};

  		var getWeight = function (min, max) {
  			return Math.floor(Math.random() * (max - min + 1)) + min;
  		};

  		var getValue = function (min, max) {
  			return Math.floor(Math.random() * (max - min + 1)) + min;
  		};

  		var getNumber = function (min, max) {
  			return Math.floor(Math.random() * (max - min + 1)) + min;
  		};

  		var sugarAbout = Math.random() >= 0.5;

  		var getEnergy = function (min, max) {
  			return Math.floor(Math.random() * (max - min + 1)) + min;
  		};

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
			
		function randomContents (a, b) {
        	return Math.random() - 0.5;
      	};
			

  		goodsObject.name = namesArray.sort(randomNames)[0];
  		goodsObject.picture = picturesArray.sort(randomPictures)[0];
  		goodsObject.amount = getAmount (0, 20);
  		goodsObject.price = getPrice (100, 1500);
  		goodsObject.weight = getWeight (30, 300);
  		goodsObject.rating.value = getValue (1, 5);
  		goodsObject.rating.number = getNumber (10, 900);
  		goodsObject.nutritionFacts.sugar = sugarAbout;
  		goodsObject.nutritionFacts.energy = getEnergy (70, 500);
  		goodsObject.nutritionFacts.contents = contentsArray.sort(randomContents)[0];

  		goodsArray.push(goodsObject);

	};
	return goodsArray;
};
getGoods();


var uselessCatalogCards = document.querySelector('.catalog__cards--load');
var uselessCatalogLoad = document.querySelector('.catalog__load');

uselessCatalogCards.classList.remove('catalog__cards--load');
uselessCatalogLoad.classList.add('visually-hidden');


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
getCardsAmount(goodsObject.amount);


var getCardTitles = function (title) {
	var cardTitle = document.querySelector('.card__title');
	cardTitle.textContent = title;
};
getCardTitles(goodsObject.name);