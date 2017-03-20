var ViewModel = function() {
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Tabby');
	this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
	this.imgAttribution = ko.observable('http://www.google.com');

	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);
	};

	this.cats = ko.observableArray([
	    { nickname: "Bungle" },
	    { nickname: "George" },
	    { nickname: "Zippy" }
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

ko.applyBindings(new ViewModel());