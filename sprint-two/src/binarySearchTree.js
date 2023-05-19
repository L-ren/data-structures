var BinarySearchTree = function(value) {
  //put insert, contains, depthFirstLog()
  var tree = Node(value);

  /*
    tree.rootNode = {.left .right .value};
  */

  tree.insert = function(value) {
    // create new node, call node constructor
    if (value === 2) {
      debugger;
    }
    var newNode = Node(value);

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



  tree.contains = function(node, value) {
    if(node === null || value === node.value) {
      return node;
    }
    if(value < node.value) {
      return recursiveTreeSearch(node.left, value);
    } else {
      return recursiveTreeSearch(node.right, value);
    }
  }

  tree.depthFirstLog = function() {

  };

  return tree;
};

var Node = function(value) {
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
