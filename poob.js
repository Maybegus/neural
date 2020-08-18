function neuron(connections, multiplier, layer) {
  this.connections = connections;
  this.multiplier = multiplier;
  this.layer = layer;
};
function node(identification, functions, layer) {
  this.id = identification;
  this.functions = functions;
  this.layer = layer;
};
function network(neurons, nodes) {
  this.neurons = neurons,
  this.nodes = nodes
};

function generate(amount, inputs, outputs, maxlayer, maxheight, minlayer, minheight) {
  let cluster = [];
  let stagingneurons = [];
  for (i = 0; i < amount; i++) {
    for (i = 0; i < maxlayer; i++) {
      for (i = 0; i < maxheight; i++) {
        Math.random()
      }
    }
    //cluster[i] = new network([new neuron([1, 3], Math.random() * 2, 1), new neuron([1, 2], Math.random() * 2, 1)], new node(1, "yeet", 1))
    cluster[i] = new network()
  }
  console.log(cluster);
}
generate(5, 3, 4, 8, 10);
