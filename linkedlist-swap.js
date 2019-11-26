let input = [5, 13, 15, 18, 20, 11];

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(data) {
    let node = new Node(data);
    let tail = null;
    if (this.head) {
      tail = this.head;
      while (tail.next !== null) {
        tail = tail.next;
      }
      tail.next = node;
      return;
    }

    this.head = node;
  }

  swap() {
    let node = this.head;
    // console.log({ node });

    let updateHead = false;

    let prevLast = null;

    while (node !== null && node.next !== null) {
      // if (node === null || node.next === null) {
      //   return;
      // }

      /**
       *  1 2  3 4
       *  2 1
       */
      //console.log({ first }, { second }, { third });

      let first = node;
      let second = node.next;
      let third = second.next;
      console.log('BEFORE::', { first }, { second }, { third });

      second.next = first;
      first.next = third;
      console.log('AFTER::', { first }, { second }, { third });

      node = third;

      if (!updateHead) {
        this.head = second;

        updateHead = true;
      }

      if (prevLast) prevLast.next = second;

      prevLast = first;
    }

    // if (input.next) {
    //   first = input;
    //   second = input.next;
    //   third = second.next;
    //   second.next = first;
    //   first.next = third;
    // }
  }

  print() {
    let node = this.head;
    while (node) {
      console.log('node::', node.data);
      node = node.next;
    }
  }
}

function test() {
  let list = new LinkedList();
  list.add(1);
  list.add(2);
  list.add(3);
  list.add(4);
  list.add(5);

  list.print();

  list.swap();

  list.print();
}
test();
