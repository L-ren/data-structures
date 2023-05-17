var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};


  // Implement the methods below
  someInstance.push = function(value) {
    // add value to storage object with subsequent numeric key
    var size = someInstance.size();
    storage[size] = value;
    // find last index in storage object (use size);
  };

  someInstance.pop = function() {
    var size = someInstance.size();
    var value = storage[size - 1]
    delete storage[size - 1];
    return value;
  };

  someInstance.size = function() {
    return (Object.keys(storage)).length;
  };

  return someInstance;
};
