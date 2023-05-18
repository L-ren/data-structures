var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {

    //Specification:
      //input: a value
      //output: none????? see question
      //constraints: tbd
      //edge cases: tbd, maybe no value passed?
    //Justification:
    //Explanation:
    //Visualization:
    //Approximation: see pseudocode
    //Verification:
    //Implementation:

//PSEUDOCODE:
    //pseudocode:
    //we are passed in a value
    //create variable for temp and pointer
    let temp, pointer;
    //temp will be assigned to invocation of Node
    temp = Node(); //no need for new keyword
    temp.value = value;
    //check if a linkedList has already been made, aka there is already a head
    //if no head, (aka head is null)
    if (this.head === null) {
      //assign list.head to point to the new node (aka temp)
      this.head = temp;
    } else { //if there is a head
      // pointer will point to head
      pointer = this.head;
      // iterate thru each node in link list and check if pointer value points to 'null'
      while (pointer.next !== null) {
        //once pointer points to null, we are going to reassign that pointer to temp (aka pointer points to the new node)
        pointer = pointer.next;
      }
      pointer.next = temp;
      // update tail
    }
    this.tail = temp;
    //QUESTION TO EXPLORE LATER: DO WE RETURN HEAD, AND IF SO, WHY?????
  };

  list.removeHead = function() {
    // declare variable for former head value
    var formerHead = this.head.value;
    // reassign current head to next head
    this.head = this.head.next;
    // this.head = pointer;
    return formerHead;
  };

  list.contains = function(target) {
  //Specification:
    //input: a target value we are searching for
    //output: a boolean (t/f)
    //constraints: tbd
    //edge cases: tbd
  //Justification: see if the linkedList contains the target value
  //Explanation: given a linkedList, search the linkedList to see if it contains the target value. if targetvalue is found, return true. if we have iterated through the whole list and the value was not found, return false
  //Visualization: see excalidraw
  //Approximation: see pseudo
  //Verification:
  //Implementation:

  //PSEUDOCODE:
  //declare a variable that will hold the boolean, which we will return at the end
  var containsTarget = false;
  // create pointer that points to head
  var pointer = this.head;
  // while current node value does not match target, check next node
  while (pointer.value !== target) {
    // if next property is null (we have reached the end of the list), return false
    if (pointer.next === null) {
      return containsTarget;
    }
    // look at 'next' property which will point to the next object
    pointer = pointer.next;
  }
  // reassign containsTarget to true
  containsTarget = true;
  // return containsTarget
  return containsTarget;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
