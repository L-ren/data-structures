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
  let containsValue;
  //look at value stored current node (which starts at newTree,which is the root node))
  //if it matches target, return true
  if (this.value === target) {
    return true;
  }
  //check if currentnode has children. if current node has children,
  if(this.children){
      //invoke forEach on each childNode
      this.children.forEach(function(child) { //what kind of data structure is this.children?
        //callback function forEach is contains(child???)
        child.contains(target);
      });
  } //if no children - do nothing

  return false;

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
