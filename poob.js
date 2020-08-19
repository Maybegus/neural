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

function generate(amount, inputs, outputs, maxlayer, maxheight) {
  let cluster = [];
  for (a = 0; a < amount; a++) {
    let stagingneurons = [];
    let stagingnodes = [];
    let progress = 0;
    let currentlayer = 0;
    for (b = 0; b < maxlayer; b++) {
      for (c = 0; c < maxheight; c++) {
        stagingnodes[progress] = new node(progress, "none", currentlayer)
        progress++
      }
      currentlayer++
    }
    cluster[a] = new network(stagingneurons, stagingnodes)
  }
  console.log(cluster[0].nodes);
}
generate(5, 3, 4, 2, 2);
