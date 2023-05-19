var BinarySearchTree = function(value) {
  //put insert, contains, depthFirstLog()
  var tree = Branch(value);

  /*
    tree.rootNode = {.left .right .value};
  */

  tree.insert = function(value) {
    // create new node, call node constructor
    var newNode = Branch(value);

    var trailingPointer; // trailingPointer is a trailing pointer that follows x
    var currentPointer = this; //x is a pointer
    let i = 0;
    while(currentPointer !== undefined){
      trailingPointer = currentPointer;
      if (newNode.value < currentPointer.value) {
        currentPointer = currentPointer.left;
      } else {
        currentPointer = currentPointer.right;
      }
      i++;
    }
    if (newNode.value < trailingPointer.value) {
      trailingPointer.left = newNode;
    } else {
      trailingPointer.right = newNode;
    }
  };



  tree.contains = function(target) {
    if(this.value === target) {
      return true;
    }
    if (target === 7) {
      debugger;
    }
    if(target < this.value) {
      return this.left.contains(target);
    } else {
      return this.right.contains(target);
    }
    return false;
  }

  tree.depthFirstLog = function() {

  };

  return tree;
};

var Branch = function(value) {
  var node = {};
  node.parent;
  node.value = value;
  node.left;
  node.right;
  return node;
}


/*
 * Complexity: What is the time complexity of the above functions?
 */


/*
Wikipedia Binary Search Key Search Recursive Function, translated into JS:

function recursiveSearchTree(node, value){
  if(node === null || value === node.value) {
    return node;
  }
  if(value < node.value) {
    return recursiveTreeSearch(node.left, value);
  } else {
    return recursiveTreeSearch(node.right, value);
  }
}

Wikipedia Binary Search Key insertion function, translated into JS:



}
*/
