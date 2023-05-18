var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
  var index = this.size();
  this.storage[index] = value;
};
Queue.prototype.dequeue = function() {
  var value = this.storage[0];
  delete this.storage[0];

  // shift values down an index
  for (var i = 0; i < this.size(); i++) {
    this.storage[i] = this.storage[i + 1];
  }

  // delete last (redundant) element
  delete this.storage[this.size() - 1];

  return value;
};
Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
};


