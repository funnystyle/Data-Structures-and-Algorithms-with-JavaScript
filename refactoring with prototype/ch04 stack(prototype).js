var Stack = function() {
    this.dataStore = [];
    this.top = 0;
};

Stack.prototype.push = function(element) {
    this.dataStore[this.top++] = element;
};

Stack.prototype.peek = function() {
    return this.dataStore[this.top - 1];
};

Stack.prototype.pop = function() {
    return this.dataStore[--this.top];
};

Stack.prototype.clear = function() {
    this.top = 0;
};

Stack.prototype.length = function() {
    return this.top;
};

// -- Test
var print = console.log;

var s = new Stack();
s.push("David");
s.push("Raymond");
s.push("Bryan");
print("length: " + s.length());
print(s.peek());
var popped = s.pop();
print("The popped element is: " + popped);
print(s.peek());
s.push("Cynthia");
print(s.peek());
s.clear();
print("length: " + s.length());
print(s.peek());
s.push("Clayton");
print(s.peek());
