function neuron(connections, multiplier, layer) {
  this.connections = connections;
  this.multiplier = multiplier;
  this.layer = layer;
};

var epicobjects = [];
for(i = 0; i < 20; i++) {
  epicobjects[i] = new neuron([1, 2], 1.2, i);
}
console.log(epicobjects);
