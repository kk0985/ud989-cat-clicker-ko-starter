var initialCats = [
 	{
		clickCount: 0,
        name: 'Little Cute Cat',
        imgSrc: 'img/little_cute_cat.jpg',
        imgAttribution : 'petattack.com/socializing-cats/',
        nicknames: ['Sweetpea']
    },
    {
        clickCount: 0,
        name: 'Adorable Cat',
        imgSrc: 'img/adorable-cat.jpg',
        imgAttribution : 'https://www.petsworld.in/blog/cat-pictures-funny-cute-adorable-and-all-time-favorite-cat-images.html',
        nicknames: ['Pecan']
    },
    {
        clickCount: 0,
        name: 'What U Say Cat',
        imgSrc: 'img/cat.jpg',
        imgAttribution: 'https://www.petfinder.com/animal-shelters-and-rescues/fostering-cats/',
        nicknames: ['Keylime']
    },
    {
        clickCount: 0,
        name: 'Winged Cat',
        imgSrc: 'img/winged-cat.jpg',
        imgAttribution: 'https://www.reddit.com/r/explainlikeimfive/comments/2irfyo/eli5_if_cats_are_lactoseintolerant_how_did_we/',
        nicknames: ['Halo']
    },
    {
        clickCount: 0,
        name: 'Cat and Dog',
        imgSrc: 'img/Dog-and-cat.jpg',
        imgAttribution: 'http://www.fanpop.com/clubs/teddybear64/images/16834786/title/dog-cat-wallpaper-wallpaper',
        nicknames: ['Power Team']
    },
];

var Cat = function (data) {
  this.clickCount = ko.observable(data.clickCount);
  this.name = ko.observable(data.name);
  this.imgSrc = ko.observable(data.imgSrc);
  this.imgAttribution = ko.observable(data.imgAttribution);
  this.nicknames = ko.observable(data.nicknames);

  this.title = ko.computed(function() {
     	var title;
      	var clicks = this.clickCount();
      	if (clicks < 10) {
        	title = 'Baby';
      	} else if (clicks >= 10 && clicks < 60) {
        	title = 'Toddler';
      	} else if (clicks >= 150) {
        	title = 'Grown-up';
    	} else {
    		title = 'Lifer';
    	}
      	return title;
    }, this);
}

var ViewModel = function () {
  	var self = this;

  	this.catList = ko.observableArray([]);

  	initialCats.forEach(function(catItem) {
  		self.catList.push( new Cat(catItem) );
  	});

  	this.currentCat = ko.observable( this.catList() [0] );

 	this.incrementCounter = function () {
    	self.currentCat().clickCount(self.currentCat().clickCount() + 1);
    };

    this.setCat = function(clickedCat) {
    	self.currentCat(clickedCat);
    };
};

ko.applyBindings(new ViewModel());
