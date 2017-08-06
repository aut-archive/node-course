function Graph() {
  this.vertices = []
  this.edges = []
}

Graph.prototype = {
  addVertex: function(v) {
    this.vertices.push(v);
  }
};

var g = new Graph();