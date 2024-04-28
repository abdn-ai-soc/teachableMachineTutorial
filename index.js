const TeachableMachine = require("@sashido/teachablemachine-node");

const model = new TeachableMachine({
  modelUrl: "https://teachablemachine.withgoogle.com/models/r6BBk-hiN/" //Replace this link with your own generated link from the website
});

model.classify({
  imageUrl: "https://www.loveyourdog.com/wp-content/uploads/2019/08/Brindle-American-Bulldog-1344x746.jpg", //Choose another random image from the internet, make sure its in the format of a URL (if you are unsure ask one of us!!)
}).then((predictions) => {
  console.log("Predictions:", predictions);
}).catch((e) => {
  console.log("ERROR", e);
});