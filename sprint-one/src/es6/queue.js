class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  enqueue(value) {
    var index = this.size();
    this.storage[index] = value;
  }
  dequeue() {
    var value = this.storage[0];
    delete this.storage[0];

    // shift values down an index
    var size = this.size();
    for (var i = 0; i < this.size(); i++) {
      this.storage[i] = this.storage[i + 1];
    }
    // delete redundant value at end
    delete this.storage[size];

    return value;
  }
  size() {
    return Object.keys(this.storage).length;
  }
}
