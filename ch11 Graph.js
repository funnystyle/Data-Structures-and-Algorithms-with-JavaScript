function Graph(v) {
    this.vertices = v;
    this.vertexList = [];
    this.edges = 0;
    this.adj = [];
    for (var i = 0; i < this.vertices; ++i) {
        this.adj[i] = [];
        this.adj[i].push();
    }
    this.addEdge = addEdge;
    this.showGraph = showGraph;
    this.dfs = dfs;
    this.marked = [];
    for (var j = 0; j < this.vertices; ++j) {
        this.marked[j] = false;
    }
    this.bfs = bfs;
    this.edgeTo = [];
    this.hasPathTo = hasPathTo;
    this.pathTo = pathTo;
    this.topSortHelper = topSortHelper;
    this.topSort = topSort;
}

function topSort() {
    var stack = [];
    var visited = [];
    for (var i = 0; i < this.vertices; i++) {
        visited[i] = false;
    }
    for (var j = 0; j < this.vertices; j++) {
        if (visited[j] == false) {
            this.topSortHelper(j, visited, stack);
        }
    }
    for (var k = 0; k < stack.length; k++) {
        if (stack[k] != undefined && stack[k] != false) {
            print(this.vertexList[stack[k]]);
        }
    }
}

function topSortHelper(v, visited, stack) {
    visited[v] = true;
    for (var w in this.adj[v]) {
        if (!visited[this.adj[v][w]]) {
            this.topSortHelper(visited[this.adj[v][w]], visited, stack);
        }
    }
    stack.push(v);
}

function addEdge(v, w) {
    this.adj[v].push(w);
    this.adj[w].push(v);
    this.edges++;
}

// function showGraph() {
//     for (var i = 0; i < this.vertices; ++i) {
//         putstr(i + " -> ");
//         for (var j = 0; j < this.vertices; ++j) {
//             if (this.adj[i][j] != undefined)
//                 putstr(this.adj[i][j] + ' ');
//         }
//         print();
//     }
// }

// a new function to display symbolic names instead of numbers
function showGraph() {
    var visited = [];
    for (var i = 0; i < this.vertices; ++i) {
        putstr(this.vertexList[i] + " -> ");
        visited.push(this.vertexList[i]);
        for (var j = 0; j < this.vertices; ++j) {
            if (this.adj[i][j] != undefined) {
                if (visited.indexOf(this.vertexList[j]) < 0) {
                    putstr(this.vertexList[j] + ' ');
                }
            }
        }
        print();
        visited.pop();
    }
}

function dfs(v) {
    this.marked[v] = true;
    if (this.adj[v] != undefined) {
        print("Visited vertex: " + v);
    }
    for (var w in this.adj[v]) {
        if (!this.marked[this.adj[v][w]]) {
            this.dfs(this.adj[v][w]);
        }
    }
}

function bfs(s) {
    var queue = [];
    this.marked[s] = true;
    queue.unshift(s);
    while (queue.length > 0) {
        var v = queue.shift();
        if (typeof(v) != "string") {
            print("Visited vertex: " + v);
        }
        for (var w in this.adj[v]) {
            if (!this.marked[this.adj[v][w]]) {
                this.edgeTo[this.adj[v][w]] = v;
                this.marked[this.adj[v][w]] = true;
                queue.unshift(this.adj[v][w]);
            }
        }
    }
}

function hasPathTo(v) {
    return this.marked[v];
}

function pathTo(v) {
    var source = 0;
    if (!this.hasPathTo(v)) {
        return undefined;
    }
    var path = [];
    for (var i = v; i != source; i = this.edgeTo[i]) {
        path.push(i);
    }
    path.push(s);
    return path;
}

// program to test dfs() function
var print = console.log;
var putstr = console.log;

// load("Graph.js");
g = new Graph(5);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 4);
g.showGraph();
g.dfs(0);

// breadth-first search
function bfs(s) {
    var queue = [];
    this.marked[s] = true;
    queue.push(s); // add to back of queue
    while (queue.length > 0) {
        var v = queue.shift(); // remove from front of queue
        if (v != null) {
            print("Visited vertex: " + v);
        }
        for (var w in this.adj[v]) {
            if (!this.marked[this.adj[v][w]]) {
                this.edgeTo[this.adj[v][w]] = v;
                this.marked[this.adj[v][w]] = true;
                queue.push(this.adj[v][w]);
            }
        }
    }
}

g = new Graph(5);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 4);
g.showGraph();
g.bfs(0);

// Finding the shortest path for a vertex
function pathTo(v) {
    var source = 0;
    if (!this.hasPathTo(v)) {
        return undefined;
    }
    var path = [];
    for (var i = v; i != source; i = this.edgeTo[i]) {
        path.push(i);
    }
    path.push(source);
    return path;
}

function hasPathTo(v) {
    return this.marked[v];
}

g = new Graph(5);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 4);
g.bfs(0);
var vertex = 4;
var paths = g.pathTo(vertex);
var str = "";
while (paths.length > 0) {
    if (paths.length > 1) {
        str += paths.pop() + '-';
    } else {
        str += paths.pop();
    }
}
print(str);


g = new Graph(6);
g.addEdge(1,2);
g.addEdge(2,5);
g.addEdge(1,3);
g.addEdge(1,4);
g.addEdge(0,1);
g.vertexList = ["CS1", "CS2", "Data Structures",
"Assembly Language", "Operating Systems",
"Algorithms"];
g.showGraph();
g.topSort();
