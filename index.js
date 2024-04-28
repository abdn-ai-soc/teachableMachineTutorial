const TeachableMachine = require("@sashido/teachablemachine-node");

const model = new TeachableMachine({
  modelUrl: "https://teachablemachine.withgoogle.com/models/r6BBk-hiN/"
});

model.classify({
  imageUrl: "https://www.loveyourdog.com/wp-content/uploads/2019/08/Brindle-American-Bulldog-1344x746.jpg",
}).then((predictions) => {
  console.log("Predictions:", predictions);
}).catch((e) => {
  console.log("ERROR", e);
});