var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var anInstance = Object.create(queueMethods);
  anInstance.storage = {};
  return anInstance;
};

// this object with be prototype to which failed property [method] lookups on our
// instances will delegate
var queueMethods = {};
queueMethods.enqueue = function(value) {
  var key = this.size();
  this.storage[key] = value;
};

queueMethods.dequeue = function() {
  // remove first item in queue
  var value = this.storage[0];
  delete this.storage[0];

  // shift values down an index
  for (var index = 0; index < this.size(); index++) {
    this.storage[index] = this.storage[index + 1];
  }
  // delete last (redudant) value
  delete this.storage[this.size() - 1];

  return value;
};

queueMethods.size = function() {
  return Object.keys(this.storage).length;
};

