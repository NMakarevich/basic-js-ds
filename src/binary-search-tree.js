const { NotImplementedError } = require('../lib');
const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  rootNode = null;

  root() {
    return this.rootNode;
  }

  add(data) {
    if (!this.rootNode) {
      this.rootNode = new Node(data);
    }

    return insertData(this.rootNode, data);

    function insertData(node, data) {
      if (data > node.data) {
        if (node.right) {
          insertData(node.right, data);
        } else {
          node.right = new Node(data);
          return node.right;
        }
      } else if (data < node.data) {
        if (node.left) {
          insertData(node.left, data);
        } else {
          node.left = new Node(data);
          return node.left;
        }
      } else {
        return node;
      }
    }
  }

  find(data) {
    if (!this.rootNode) {
      return null;
    }

    function findNode(node, data) {
      if (node.data === data) {
        return node;
      } else if (data < node.data) {
        return node.left ? findNode(node.left, data) : null;
      } else if (data > node.data) {
        return node.right ? findNode(node.right, data) : null;
      }
    }

    return findNode(this.rootNode, data);
  }

  has(data) {
    return !!this.find(data);
  }

  remove(data) {
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
    removeNode(this.rootNode, data);
  }

  min() {
    let currentNode = this.rootNode;
    if (!currentNode) {
      return null
    }
    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode.data
  }

  max() {
    let currentNode = this.rootNode;
    if (!currentNode) {
      return null
    }
    while (currentNode.right) {
      currentNode = currentNode.right;
    }
    return currentNode.data
  }
}

module.exports = {
  BinarySearchTree
};
