var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    // get object size, is the index at which to add value
    var size = someInstance.size();
    storage[size] = value;
  };

  someInstance.dequeue = function() {
    var value = storage[0];
    delete storage[0];

    // update indices, since first index 0 is gone
    var size = someInstance.size();
    for (var i = 0; i < size; i++) {
      storage[i] = storage[i + 1];
    }
    delete storage[size];

    // turns out it doesn't matter that I maintain the indices like an array
    // (first element doesn't always have to stay at key '0')
    // I would refactor without the 'update indices' code, and use Math.min
    // and Math.max methods to delete and add values, respectively
    return value;
  };

  someInstance.size = function() {
    return (Object.keys(storage)).length;
  };

  return someInstance;
};
