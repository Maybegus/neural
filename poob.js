function neuron(connections, multiplier, layer) {
  this.connections = connections;
  this.multiplier = multiplier;
  this.layer = layer;
};
function node(identification, functions, layer, input, output) {
  this.id = identification;
  this.functions = functions;
  this.layer = layer;
  this.input = input;
  this.output = output;
};
function network(neurons, nodes) {
  this.neurons = neurons,
  this.nodes = nodes
};

function generate(amount, inputs, outputs, maxlayer, maxheight, neurondensity) {
  let cluster = [];
  let nodeindex = [];
  let neuronindex = [];
  for (a = 0; a < amount; a++) {
    let stagingneurons = [];
    let stagingnodes = [];
    let progress = 0;
    let currentlayer = 0;
    for (b = 0; b < inputs; b++) {
      stagingnodes[progress] = new node(progress, "none", currentlayer, true, false);
      progress++;
    }
    currentlayer++;
    for (b = 0; b < maxlayer; b++) {
      for (c = 0; c < maxheight; c++) {
        stagingnodes[progress] = new node(progress, "none", currentlayer, false, false);
        progress++;
      }
      currentlayer++;
    }
    for (b = 0; b < outputs; b++) {
      stagingnodes[progress] = new node(progress, "none", currentlayer, false, true);
      progress++
    }
    progress = 0
    currentlayer = 0
    for (b = 0; b < inputs; b++) {
      stagingneurons[progress] = new neuron([b, Math.floor(Math.random() * (inputs + maxheight - inputs + 1)) + inputs], Math.random()*(1.9 - 0.1) + 0.1, currentlayer);
      progress++
      //Math.floor(Math.random() * (max - min + 1) ) + min;
    }
    currentlayer++
    cluster[a] = new network(stagingneurons, stagingnodes);
  }
  console.log(cluster[0].nodes);
}
generate(5, 3, 4, 2, 2, 1);
