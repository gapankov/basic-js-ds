const { Node } = require('../extensions/list-tree.js');


class BinarySearchTree {

  constructor() {
    this.threeRoot = null;
  };

  root() {
    return this.threeRoot;
  }

  add(data) {
    const addDataToThree = (node, data) => {
      if (!node) {
        return new Node(data);
      } else if (node.data === data) {
        return node;
      } else if (node.data > data) {
        node.left = addDataToThree(node.left, data);
      } else {
        node.right = addDataToThree(node.right, data);
      }
      return node;
    }
    this.threeRoot = addDataToThree(this.threeRoot, data);
    console.log(this.threeRoot);
  }

  has(data) {
    const search = (node, data) => {
      if (node == null) return;
      if (node.data === data) return node;
      return node.data > data ? search(node.left, data) : search(node.right, data);
    }
    return !!search(this.threeRoot, data);
  }

  find(data) {
    const search = (node, data) => {
      if (node == null) return;
      if (node.data === data) return node;
      return node.data > data ? search(node.left, data) : search(node.right, data);
    }
    return search(this.threeRoot, data) ? search(this.threeRoot, data) : null;
  }

  remove(data) {
    const removeFromThree = (node, data) => {
      if (!node) {
        return null;
      } else if (node.data > data) { 
        node.left = removeFromThree(node.left, data); 
        return node;
      }
      else if (node.data < data) { 
        node.right = removeFromThree(node.right, data); 
        return node;
      }
      else {
        // if (!node.left && !node.right) return null;
        if (!node.left) { 
          node = node.right; 
          return node;
        }
        if (!node.right) { 
          node = node.left; 
          return node;
        }
        let maxBranch = node.left;
        while (maxBranch.right) maxBranch = maxBranch.right
        node.data = maxBranch.data
        node.left = removeFromThree(node.left, maxBranch.data);
        return node;
      }
    }
    this.threeRoot = removeFromThree(this.threeRoot, data);
  }

  min() {
    // const newNode = this.threeRoot.left;
    const checkMin = (newNode) => {
      if (newNode.left) return checkMin(newNode.left);
      return newNode.data;
    }
    return checkMin(this.threeRoot);
  }

  max() {
    // const newNode = this.threeRoot.right;
    const checkMax = (newNode) => {
      if (newNode.right) return checkMax(newNode.right);
      return newNode.data;
    }
    return checkMax(this.threeRoot);
  }
}

const tree = new BinarySearchTree();

tree.add(3);
tree.add(1);
tree.add(5);
tree.add(4);
tree.remove(4);
console.log(tree.min());
console.log(tree.max());

module.exports = {
  BinarySearchTree
};