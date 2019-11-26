// 			a
// 		b     c
// 	d    e
// f   g

// 		a
// 	b        c
// d    h   g    i

function findHeight(node) {
  console.log({ node });
  if (!node) return 0;
  if (node.leftNode == null && node.rightNode == null) {
    return 1;
  }

  let left = findHeight(node.leftNode);
  let right = findHeight(node.rightNode);

  return (left > right ? left : right) + 1;
}

function Node() {
  val = '';
  leftNode = null;
  rightNode = null;
}

function test() {
  Anode = new Node();
  Anode.val = 'a';
  Bnode = new Node();
  Bnode.val = 'b';
  Cnode = new Node();
  Cnode.val = 'c';
  Dnode = new Node();
  Dnode.val = 'd';
  Enode = new Node();
  Enode.val = 'e';

  Anode.leftNode = Bnode;
  Anode.rightNode = Cnode;

  Bnode.leftNode = Dnode;
  Bnode.rightNode = Enode;

  let result = findHeight(Anode);

  console.log({ result });
}

test();
