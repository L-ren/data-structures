var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var anInstance = {};
  anInstance.storage = {};
  _.extend(anInstance, queueMethods);
  return anInstance;
};

var queueMethods = {};
  // enqueue
  queueMethods.enqueue = function(value) {
    var size = this.size();
    this.storage[size] = value;
  };

  // dequeue
  queueMethods.dequeue = function() {
    // get smallest index of all propeties in storage
    var value = this.storage[0];
    delete this.storage[0];

    // update indices, since first index 0 is gone
    var size = this.size();
    for (var i = 0; i < size; i++) {
      // shift all elements down an index
      this.storage[i] = this.storage[i + 1];
    }
    // delete last [duplicate] element
    delete this.storage[size];

    // I tried using min and max for this method but I prefer shifting the
    // indices instead
    return value;
  };
  // size
queueMethods.size = function() {
  return (Object.keys(this.storage)).length;
};



