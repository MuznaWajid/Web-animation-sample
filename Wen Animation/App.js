var element = document.getElementById("text");
element.animate(
  [
    { transform: "translate(0,0)" ,background:'darkblue' },
    { transform: "translate(400px,0px)",background:'lightblue' },
    { transform: "translate(400px,400px)",background:'skyblue' },
    { transform: "translate(0px,400px)" ,background:'blue'},
    { transform: "translate(0,0)" ,background:'sky'},
  ],
  { duration: 4000, iterations: Infinity }
);
