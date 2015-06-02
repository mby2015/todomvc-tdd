function List() {
	this.itemList = [];
	this.isComplete = false;
}
List.prototype.addItem = function(options) {
	var item = new Item(options);
	this.itemList.push(item);
}
List.prototype.removeItem = function(index) {
	this.itemList.splice(index,1);
}
List.prototype.updateItem = function(index, subject) {
	if(arguments.length > 1) {
		this.itemList[index].setSubject(subject);
	}
	else {
		this.itemList[index].toggle();
		return this.getState();
	}
}
List.prototype.getState = function() {
	for(var i=0; i<this.itemList.length; i++) {
		if(this.itemList[i].complete === false) {
			return false;
		}
	}
	return true;
}
List.prototype.getItems = function(isComplete) {
	var filterItemList = this.itemList.filter(function(item) {
		return item.complete === !!isComplete;
	});
	return filterItemList;
}