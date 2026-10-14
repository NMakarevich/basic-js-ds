const { NotImplementedError } = require('../lib');
const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  function findPosition(k) {
    let position = 0;
    let current = l;
    while (current.next) {
      if (current.value === k) return position
      current = current.next;
      position++;
    }
    if (current.value === k) return position;
    return -1
  }

  function removeK(position) {
    let current = l;
    if (position === 0) {
      l = l.next;
    }
    else {
      let index = 0;
      let prev = null;

      while (index < position) {
        prev = current;
        current = current.next;
        index++
      }
      prev.next = current.next
    }
  }

  while (findPosition(k) >= 0) {
    removeK(findPosition(k));
  }

  return l
}

module.exports = {
  removeKFromList
};
