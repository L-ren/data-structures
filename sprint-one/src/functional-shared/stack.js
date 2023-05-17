var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newInstance = {};
  newInstance.storage = {};
  // extend new instance with stack methods
  _.extend(newInstance, stackMethods);
  return newInstance;
};

var stackMethods = {};
// push
stackMethods.push = function(value) {
  var size = this.size();

  // push new value into storage object, under next index (size)
  this.storage[size] = value;
};
//pop
stackMethods.pop = function() {
  var size = this.size();
  var lastItem = this.storage[size - 1];
  delete this.storage[size - 1];
  return lastItem;
};
//size
stackMethods.size = function() {
  return (Object.keys(this.storage)).length;
};



