function Item(option) {
	option = option || {};
	this.subject = option.subject || 'noname';
	this.complete = option.complete || false;
}

Item.prototype.toggle = function() {
	this.complete = !this.complete;
};

Item.prototype.setSubject = function(subject) {
	this.subject = subject;
};