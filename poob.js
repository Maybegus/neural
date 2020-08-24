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
    for (b = 0; b < maxlayer + 2; b++) {
      for (c = 0; c < stagingnodes.length; c++) {
          temp = stagingnodes.findIndex(element => element.layer == b && element.neurons == false)
          if (temp != -1) {
            first[firstprogress] = stagingnodes[temp].id;
            stagingnodes[temp].neurons = "loaded"
          }
          temp = stagingnodes.findIndex(element => element.layer == b + 1 && element.neurons == false)
          if (temp != -1) {
            second[secondprogress] = stagingnodes[temp].id;
            stagingnodes[temp].neurons = "loaded"
          }
          console.log(b)
          console.log(first)
          console.log(second)

          firstprogress++
          secondprogress++
      }

      while (first.length > second.length) {
        

        second[second.length] = second[Math.floor(Math.random() * second.length)];
      }
      while (first.length < second.length) {
        first[first.length] = first[Math.floor(Math.random() * first.length)];
      }
      console.log(first)
      console.log(second)
      if (first.length == second.length) {
        while (first.length > 0) {
          //console.log("ran");
          //console.log(first);
          //console.log(second);

          stagingneurons[neuronprogress] = new neuron([first[Math.floor(Math.random() * first.length)], second[Math.floor(Math.random() * second.length)]], Math.random() * (1.9 - 0.1) + 0.1, b);
          temp = first.findIndex(element => element == stagingneurons[neuronprogress].connections[0]);
          first.splice(temp, 1);
          temp = second.findIndex(element => element == stagingneurons[neuronprogress].connections[1]);
          second.splice(temp, 1)
          neuronprogress++
          console.log(first);
          console.log(second);
          //console.log("LINEBREAK")
        }
      first = [];
      second = [];
      }
    }
    console.log(stagingneurons)
    console.log(stagingnodes)

    //console.log(unsetnodeindex);
    //console.log(stagingnodes);
    cluster[a] = new network(stagingneurons, stagingnodes);
  }
}
generate(1, 5, 5, 5, 5, 7);
