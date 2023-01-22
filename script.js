const btn = document.querySelector("button");
const outputText = document.querySelector(".output");

btn.addEventListener("click", () => {
  const cost = document.querySelector("input");
  let tip = (cost.value * 0.15).toFixed(2);
  let temp = `<h1>You shoud tip $ ${tip} on $ ${cost.value}</h1>`;

  outputText.innerHTML = temp;
});
