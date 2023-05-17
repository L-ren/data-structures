var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // create object with stackMethods as fallback object
  var anInstance = Object.create(stackMethods);
  // add storage property
  anInstance.storage = {};
  //return object
  return anInstance;
};

var stackMethods = {};
stackMethods.push = function(value) {
  var index = this.size();
  this.storage[index] = value;
};
stackMethods.pop = function() {
  var index = this.size() - 1;
  var value = this.storage[index];
  delete this.storage[index];
  return value;
};
stackMethods.size = function() {
  return (Object.keys(this.storage)).length;
};
