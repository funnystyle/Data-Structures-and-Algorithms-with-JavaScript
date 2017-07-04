var Dictionary = function() {
    this.datastore = {};
};

Dictionary.prototype.add = function(key, value) {
    this.datastore[key] = value;
};

Dictionary.prototype.find = function(key) {
    return this.datastore[key];
};

Dictionary.prototype.remove = function(key) {
    delete this.datastore[key];
};

Dictionary.prototype.showAll = function() {
    for (var key in this.datastore) {
        print(key + " -> " + this.datastore[key]);
    }
};

Dictionary.prototype.showAll = function() {// Sorted
    var sorted = Object.keys(this.datastore).sort(); // IE9+
    for (var i = 0; i < sorted.length; i++) {
        print(sorted[i] + " -> " + this.datastore[sorted[i]]);
    }
};

Dictionary.prototype.count = function() {
    return Object.keys(this.datastore).length; // IE9+
    // var n = 0;
    // for (var key in this.datastore) {
    //     ++n;
    // }
    // return n;
};

Dictionary.prototype.clear = function() {
    for (var key in this.datastore) {
        delete this.datastore[key];
    }
};

// Test
var print = console.log;

// load("Dictionary.js");
var pbook = new Dictionary();
pbook.add("Mike", "123");
pbook.add("David", "345");
pbook.add("Cynthia", "456");
print("David's extension: " + pbook.find("David"));
pbook.remove("David");
pbook.showAll();

//
// load("Dictionary.js");
var pbook = new Dictionary();
pbook.add("Raymond", "123");
pbook.add("David", "345");
pbook.add("Cynthia", "456");
print("Number of entries: " + pbook.count());
print("David's extension: " + pbook.find("David"));
pbook.showAll();
pbook.clear();
print("Number of entries: " + pbook.count());

//
// load("Dictionary.js");
var pbook = new Dictionary();
pbook.add("Raymond","123");
pbook.add("David", "345");
pbook.add("Cynthia", "456");
pbook.add("Mike", "723");
pbook.add("Jennifer", "987");
pbook.add("Danny", "012");
pbook.add("Jonathan", "666");
pbook.showAll();
