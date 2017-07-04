var Node = function(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
};

Node.prototype.show = function() {
    return this.data;
};

var BST = function() {
    this.root = null;
};

BST.prototype.insert = function(data) {
    var n = new Node(data, null, null);
    if (this.root == null) {
        this.root = n;
    } else {
        var current = this.root;
        var parent;
        while (true) {
            parent = current;
            if (data < current.data) {
                current = current.left;
                if (current == null) {
                    parent.left = n;
                    break;
                }
            } else {
                current = current.right;
                if (current == null) {
                    parent.right = n;
                    break;
                }
            }
        }
    }
};

BST.prototype.inOrder = function() {
    var inOrder = function(node) {
        if (node !== null) {
            inOrder(node.left);
            putstr(node.show() + " ");
            inOrder(node.right);
        }
    };

    inOrder(this.root);
};

BST.prototype.preOrder = function() {
    var preOrder = function(node) {
        if (node !== null) {
            putstr(node.show() + " ");
            preOrder(node.left);
            preOrder(node.right);
        }
    };

    preOrder(this.root);
};

BST.prototype.postOrder = function() {
    var postOrder = function(node) {
        if (node !== null) {
            postOrder(node.left);
            postOrder(node.right);
            putstr(node.show() + " ");
        }
    };

    postOrder(this.root);
};

BST.prototype.getMin = function() {
    var current = this.root;
    while (current.left !== null) {
        current = current.left;
    }
    return current.data;
};

BST.prototype.getMax = function() {
    var current = this.root;
    while (current.right !== null) {
        current = current.right;
    }
    return current.data;
};

BST.prototype.find = function(data) {
    var current = this.root;
    while (current.data != data) {
        if (data < current.data) {
            current = current.left;
        } else {
            current = current.right;
        }
        if (current == null) {
            return null;
        }
    }
    return current;
};

BST.prototype.remove = function(data) {
    var removeNode = function(node, data) {
        if (node == null) {
            return null;
        }
        if (data == node.data) {
            // node has no children
            if (node.left == null && node.right == null) {
                return null;
            }
            // node has no left child
            if (node.left == null) {
                return node.right;
            }
            // node has no right child
            if (node.right == null) {
                return node.left;
            }
            // node has two children
            var tempNode = getSmallest(node.right);
            node.data = tempNode.data;
            node.right = removeNode(node.right, tempNode.data);
            return node;
        } else if (data < node.data) {
            node.left = removeNode(node.left, data);
            return node;
        } else {
            node.right = removeNode(node.right, data);
            return node;
        }
    };

    root = removeNode(this.root, data);
};

// Test
var print = console.log;
var putstr = console.log;

// inorder traversal
var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
print("Inorder traversal: ");
nums.inOrder();

// preorder traversal
print("PreOrder traversal: ");
nums.preOrder();

// postorder traversal
print("postOrder traversal: ");
nums.postOrder();

// minimun value of a BST
// maximun value of a BST
var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
var min = nums.getMin();
print("The minimum value of the BST is: " + min);
print("\n");
var max = nums.getMax();
print("The maximum value of the BST is: " + max);

// find
var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
nums.inOrder();
print("\n");
putstr("Enter a value to search for: ");
// var value = parseInt(readline());
var value = 23;
var found = nums.find(value);
if (found != null) {
    print("Found " + value + " in the BST.");
} else {
    print(value + " was not found in the BST.");
}
