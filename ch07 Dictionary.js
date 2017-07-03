function Dictionary() {
    this.datastore = []; // use array for sorting
    this.add = add;
    this.find = find;
    this.remove = remove;
    this.showAll = showAll;
    this.count = count;
    this.clear = clear;
}

function add(key, value) {
    this.datastore[key] = value;
}

function find(key) {
    return this.datastore[key];
}

function remove(key) {
    delete this.datastore[key];
}

function showAll() {
    for (var key in this.datastore) {
        print(key + " -> " + this.datastore[key]);
    }
}

function showAll() {// Sorted
    var sorted = Object.keys(this.datastore).sort();
    for (var i = 0; i < sorted.length; i++) {
        print(sorted[i] + " -> " + this.datastore[sorted[i]]);
    }
}

function count() {
    var n = 0;
    for (var key in this.datastore) {
        ++n;
    }
    return n;
}

function clear() {
    for (var key in this.datastore) {
        delete this.datastore[key];
    }
}

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
