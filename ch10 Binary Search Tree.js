function Node(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.show = show;
}

function show() {
    return this.data;
}

function BST() {
    this.root = null;
    this.insert = insert;
    this.inOrder = inOrder;

    this.getMin = getMin;
    this.getMax = getMax;

    this.find = find;
    this.remove = remove;
}

function insert(data) {
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
}

// Test
var print = console.log;
var putstr = console.log;

// inorder traversal
function inOrder(node) {
    if (node !== null) {
        inOrder(node.left);
        putstr(node.show() + " ");
        inOrder(node.right);
    }
}

var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
print("Inorder traversal: ");
inOrder(nums.root);

// preorder traversal
function preOrder(node) {
    if (node !== null) {
        putstr(node.show() + " ");
        preOrder(node.left);
        preOrder(node.right);
    }
}

print("PreOrder traversal: ");
preOrder(nums.root);

// postorder traversal
function postOrder(node) {
    if (node !== null) {
        postOrder(node.left);
        postOrder(node.right);
        putstr(node.show() + " ");
    }
}

print("postOrder traversal: ");
postOrder(nums.root);

// minimun value of a BST
function getMin() {
    var current = this.root;
    while (current.left !== null) {
        current = current.left;
    }
    return current.data;
}

// maximun value of a BST
function getMax() {
    var current = this.root;
    while (current.right !== null) {
        current = current.right;
    }
    return current.data;
}

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

function find(data) {
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
}

var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
inOrder(nums.root);
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

function remove(data) {
    root = removeNode(this.root, data);
}

function removeNode(node, data) {
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
}
