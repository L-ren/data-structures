var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.storage = {};
};

// define methods on the Stack function prototype
Stack.prototype.push = function(value) {
  var index = this.size();
  this.storage[index] = value;
};
Stack.prototype.pop = function() {
  var index = this.size();
  var value = this.storage[index - 1];
  delete this.storage[index - 1];
  return value;
};
Stack.prototype.size = function() {
  return Object.keys(this.storage).length;
};
