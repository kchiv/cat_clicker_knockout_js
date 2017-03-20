var Cat = function() {
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Tabby');
	this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
	this.imgAttribution = ko.observable('http://www.google.com');

	this.cats = ko.observableArray([
	    { nickname: "Tabster" },
	    { nickname: "Lil Tabs" },
	    { nickname: "Tabs not Spaces" }
    ]);

	this.level = ko.computed(function() {
		if (this.clickCount() >= 20) {
			return 'adult';
		} else if (this.clickCount() >= 10) {
			return 'child';
		} else {
			return 'infant';
		}
	}, this);

} 

var ViewModel = function() {

	this.currentCat = ko.observable( new Cat() );

	this.incrementCounter = function() {
		this.currentCat().clickCount(this.currentCat().clickCount() + 1);
	};

}

ko.applyBindings(new ViewModel());