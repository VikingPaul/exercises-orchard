"use strict";
// Create a Plant function.
// Plant should have a property of height.
var Plant = function() {
  this.height = 0;
}
// The Plant prototype should have two methods on it: increaseHeight and decreaseHeight. Each method should accept an integer value as input.
// increaseHeight should increase the value of the height property by the amount passed in as an argument.
Plant.prototype.increaseHeight = function(amount) {
  this.height += amount;
}
// decreaseHeight should decrease the value of the height property by the amount passed in as an argument.
Plant.prototype.decreaseHeight = function(amount) {
  this.height -= amount;
}
// Create a Tree function.
// Tree should have a property of branches.
var Tree = function() {
  this.branches = 0;
  this.growthCount = 0;
}
// Plant should be the prototype of Tree.
Tree.prototype = new Plant();
// The Tree prototype should have two methods on it: grow and trim.
// The grow method should accept an integer value as input.
// The grow method should increase the height of the tree.
// Each time the height of a tree increases by 10, the value of branch should increase by one.
Tree.prototype.grow = function(amount) {
  this.increaseHeight(amount);
  this.growthCount += amount;
  while (this.growthCount >= 10) {
    this.growthCount -= 10;
    this.branches++;
  }
}
// The trim method should accept an integer value as input.
// The trim method should decrease the height of the tree.
// When the trim method is called, the number of branches should decrease by one.
Tree.prototype.trim = function(amount) {
  this.decreaseHeight(amount);
  this.branches--;
}


// Create a PearTree instance of Tree. var PearTree = new Tree();
var PearTree = new Tree()
// Create an OakTree instance of Tree.
var OakTree = new Tree()
// Every second, increase the height the pear tree by some integer value and increase the height the oak tree by some integer value that is larger than what you used for the pear tree.
var time = setInterval(function() {
  growOrchard(11,21)
  output()
}, 1000)
// Every tenth time the trees are grown, invoke the trim method. Pass one value to the method for the pear tree, and a larger value to the method on the oak tree.
// Stop growing the trees after they have grown 30 times.
var counter = 0
function growOrchard(first, second) {
  counter++
  PearTree.grow(first)
  OakTree.grow(second)
  if (counter%10 === 0) {
    PearTree.trim(first-5)
    OakTree.trim(second-5)
  }
  if (counter === 30) {
    clearInterval(time)
  }
}
// Also output the current height of each tree and how many branches it has to the DOM.
function output() {
  document.getElementById('output').innerHTML += `<div>The Pear tree is now ${PearTree.height} in. With ${PearTree.branches} branches</div><div>The Oak tree is now ${OakTree.height} in. With ${OakTree.branches} branches</div><br>`
}
