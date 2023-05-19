var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me //original value = null

  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newborn = Tree(value);
  this.children.push(newborn);
};

treeMethods.contains = function(target) { //use recursion
  //we're passed a target value
  //declare something to contain boolean, which we return later
  debugger;

  if (containsValue === undefined) {
    var containsValue = false;
  }
  //look at value stored current node (which starts at newTree,which is the root node))
  //if it matches target, return true
  if ((this.value === target) || (containsValue)) {
    // containsValue = true;
    containsValue = true;
  }
  //check if currentnode has children. if current node has children,
  if(this.children){
      //invoke forEach on each childNode
      // containsValue = this.children.map(function(child) { //what kind of data structure is this.children?
      if (!containsValue) {
        containsValue = _.some(this.children, function(child) { return child.contains(target)});
      }

  } //if no children - do nothing

  return containsValue;

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
