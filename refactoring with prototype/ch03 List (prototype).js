var List = function() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = []; // initializes an empty array to store list elements
};

List.prototype.clear = function() {
    delete this.dataStore;
    this.dataStore = [];
    this.listSize = this.pos = 0;
};

List.prototype.find = function(element) {
    for (var i = 0; i < this.dataStore.length; ++i) {
        if (this.dataStore[i] == element) {
            return i;
        }
    }
    return -1;
};

List.prototype.toString = function() {
    return this.dataStore;
};

List.prototype.insert = function(element, after) {
    var insertPos = this.find(after);
    if (insertPos > -1) {
        this.dataStore.splice(insertPos + 1, 0, element);
        ++this.listSize;
        return true;
    }
    return false;
};

List.prototype.append = function(element) {
    this.dataStore[this.listSize++] = element;
};

List.prototype.remove = function(element) {
    var foundAt = this.find(element);
    if (foundAt > -1) {
        this.dataStore.splice(foundAt, 1);
        --this.listSize;
        return true;
    }
    return false;
};

List.prototype.front = function() {
    this.pos = 0;
};

List.prototype.end = function() {
    this.pos = this.listSize - 1;
};

List.prototype.prev = function() {
    if (this.pos > 0) {
        --this.pos;
    }
};

List.prototype.next = function() {
    if (this.pos < this.listSize - 1) {
        ++this.pos;
    }
};

List.prototype.length = function() {
    return this.listSize;
};

List.prototype.currPos = function() {
    return this.pos;
};

List.prototype.moveTo = function(position) {
    this.pos = position;
};

List.prototype.getElement = function getElement() {
    return this.dataStore[this.pos];
};

List.prototype.contains = function(element) {
    for (var i = 0; i < this.dataStore.length; ++i) {
        if (this.dataStore[i] == element) {
            return true;
        }
    }
    return false;
};

// Test
var print = console.log;

var names = new List();
names.append("Cynthia");
names.append("Raymond");
names.append("Barbara");
print(names.toString());
names.remove("Raymond");
print(names.toString());

//---

var names = new List();
names.append("Clayton");
names.append("Raymond");
names.append("Cynthia");
names.append("Jennifer");
names.append("Bryan");
names.append("Danny");

names.front();
print(names.getElement()); // displays Clayton

names.next();
print(names.getElement()); // displays Raymond

names.next();
names.next();
names.prev();
print(names.getElement()); // displays Cynthia

print(names.find("Bryan"));
