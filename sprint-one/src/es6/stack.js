class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  push(value) {
    var index = this.size();
    this.storage[index] = value;
  }
  pop() {
    var index = this.size() - 1;
    var value = this.storage[index];
    delete this.storage[index];
    return value;
  }

  size() {
    return Object.keys(this.storage).length;
  }
}