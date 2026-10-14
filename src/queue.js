const { NotImplementedError } = require('../lib');
const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  head = null;

  getUnderlyingList() {
    const result = {};
    if (!this.head) return null;
    let currentNode = this.head;
    let currentResult = result;
    while (currentNode && currentNode.next) {
      currentResult.value = currentNode.value;
      currentResult.next = {}
      currentNode = currentNode.next;
      currentResult = currentResult.next;
    }
    currentResult.value = currentNode.value;
    currentResult.next = null;
    return result;
  }

  enqueue(value) {
    if (!this.head) {
      this.head = new ListNode(value);
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = new ListNode(value);
    }
  }

  dequeue() {
    let result = undefined
    if (!this.head) return result;
    result = this.head.value;
    if (!this.head.next) {
      this.head = null;
    } else {
      this.head = this.head.next;
    }
    return result;
  }
}

module.exports = {
  Queue
};
