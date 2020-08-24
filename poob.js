//const fs = require(fs);
function neuron(connections, multiplier, layer) {
  this.connections = connections;
  this.multiplier = multiplier;
  this.layer = layer;
};
function node(identification, functions, layer, input, output, neurons) {
  this.id = identification;
  this.functions = functions;
  this.layer = layer;
  this.input = input;
  this.output = output;
  this.neurons = neurons;
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
    let unsetnodeindex = [];
    for (b = 0; b < inputs; b++) {
      stagingnodes[progress] = new node(progress, "none", currentlayer, true, false, false);
      progress++;
    }
    currentlayer++;
    for (b = 0; b < maxlayer; b++) {
      for (c = 0; c < maxheight; c++) {
        stagingnodes[progress] = new node(progress, "none", currentlayer, false, false, false);
        progress++;
      }
      currentlayer++;
    }
    for (b = 0; b < outputs; b++) {
      stagingnodes[progress] = new node(progress, "none", currentlayer, false, true, false);
      progress++
    }
    progress = 0;
    let first = [];
    let second = [];
    let firstprogress = 0;
    let secondprogress = 0;
    let neuronprogress = 0;
    let temp;
    for (b = 0; b < maxlayer + 1; b++) {
      first = stagingnodes.filter(element => element.layer == b);
      second = stagingnodes.filter(element => element.layer == b + 1);

      while (first.length > second.length) {
        second[second.length] = second[Math.floor(Math.random() * second.length)];
      }
      while (first.length < second.length) {
        first[first.length] = first[Math.floor(Math.random() * first.length)];
      }
      if (first.length == second.length) {
        while (first.length > 0) {
          stagingneurons[neuronprogress] = new neuron([first[Math.floor(Math.random() * first.length)].id, second[Math.floor(Math.random() * second.length)].id], Math.random() * (1.9 - 0.1) + 0.1, b);
          temp = first.findIndex(element => element.id == stagingneurons[neuronprogress].connections[0]);
          first.splice(temp, 1);
          temp = second.findIndex(element => element.id == stagingneurons[neuronprogress].connections[1]);
          second.splice(temp, 1)
          neuronprogress++
      }
    first = [];
    second = [];
    }
    cluster[a] = new network(stagingneurons, stagingnodes);
    }
  }
  console.log(cluster)
}
generate(1, 1, 1, 2, 2, 7);
