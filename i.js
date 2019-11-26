class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class Tree {
  constructor(rootData) {
    this.root = new Node(rootData, null, null);
  }

  findLCA(node, n1, n2) {
    if (this.root) {
      // console.log(node);
      if (!node) return null;
      // console.log(n1, n2);

      // console.log('n1 < node.left.data::', n1, node.left.data);
      if (n1 < node.data && n2 < node.data) {
        //  console.log('in left');
        return this.findLCA(node.left, n1, n2);
      }

      if (n1 > node.data && n2 > node.data) {
        // console.log('in right');
        return this.findLCA(node.right, n1, n2);
      }

      return node;
    }
  }
}

function test() {
  let tree = new Tree(20);
  tree.root.left = new Node(8);
  tree.root.right = new Node(22);
  tree.root.left.left = new Node(4);
  tree.root.left.right = new Node(12);
  tree.root.left.right.left = new Node(10);
  tree.root.left.right.right = new Node(14);

  let lca1 = tree.findLCA(tree.root, 14, 10);

  console.log(lca1);

  let lca2 = tree.findLCA(tree.root, 14, 8);

  console.log(lca2);

  let lca3 = tree.findLCA(tree.root, 10, 22);

  console.log(lca3);
}

test();
