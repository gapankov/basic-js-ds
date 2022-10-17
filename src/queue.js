const { NotImplementedError } = require('../extensions/index.js');
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

  constructor() {
    this.queue = null;
  }


  getUnderlyingList() {
    return this.queue; 
  }

  enqueue(value) {
    const addToQueue = (queue, value) => {
      if (!queue) return new ListNode(value);
      // if (queue.next) return addToQueue(queue.next, value);
      queue.next = addToQueue(queue.next, value);
      return queue;
      
    };
    this.queue = addToQueue(this.queue, value);
  }

  dequeue() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let arr = [];
    const remove = (queue) => {
      if (queue) { 
        arr.push(queue.value); 
        return queue = queue.next; 
      }
      queue.next = remove(queue.next);
      return queue;
    }
    this.queue = remove(this.queue);
    return arr[0];
  }
}
// const queue = new Queue();
// queue.enqueue(1); 
// // console.log(queue);
// queue.enqueue(4); 
// // console.log(queue);
// // adds the element to the queue
// queue.enqueue(3); // adds the element to the queue
// console.log(queue);
// queue.dequeue(); // returns the top element from queue and deletes it, returns 1
// console.log(queue);
// queue.getUnderlyingList() // returns { value: 3, next: null }

module.exports = {
  Queue
};
