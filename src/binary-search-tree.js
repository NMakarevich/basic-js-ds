const { NotImplementedError } = require('../extensions/index.js');

 const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {
  //this code is based on Anton Bely video about BST
  root() {
    if(!this.start) this.start = null
    return this.start
  }

  add(data) {
    this.start = addData(this.start, data)

    function addData(node, data) {
      if (!node) {
        return new Node(data)
      }

      if(node.data === data) {
        return node
      }

      data < node.data ? node.left = addData(node.left, data) : node.right = addData(node.right, data)
      return node;
    }
  }

  has(data) {
    let arr = [];
    addToArr(this.start, arr)

    //this function with small changes can adapts for has, min and max methods, but if tree is to long it's not effective
    function addToArr(node, arr) {
      if (!node) {
        return null
      }
    
      addToArr(node.left, arr);
      if (node.data <= data) {
        arr.push(node.data);
        addToArr(node.right, arr);
      }
      else return arr
    }

    return arr.includes(data) ? true : false
  }

  find(data) {
    return findNode(this.start, data);

    function findNode(node, data) {
      if (!node) {
        return null
      }

      if (node.data === data) {
        return node;
      }

      return data < node.data ? findNode(node.left, data) : findNode(node.right, data)
    }
  }

  remove(data) {
    this.start = removeNode(this.start, data)

    function removeNode(node, data) {
      if (!node) return null
      
      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      }
      else if (data > node.data) {
        node.right = removeNode(node.right, data)
        return node;
      }
      else {
        if (!node.left && !node.right) return null

        if (!node.left) {
          node = node.right;
          return node
        }
        if(!node.right) {
          node = node.left;
          return node
        }

        let maxFromLeft = node.left;
        while (maxFromLeft.right) {
          maxFromLeft = maxFromLeft.right
        }

        node.data = maxFromLeft.data
        node.left = removeNode(node.left, maxFromLeft.data)

        return node
      }
    }
  }

  min() {
    if(!this.start) return

    let node = this.start
    while(node.left) {  
      node = node.left
    }
    return node.data
  }

  max() {
    if(!this.start) return

    let node = this.start
    while(node.right) {  
      node = node.right
    }
    return node.data
  }
}