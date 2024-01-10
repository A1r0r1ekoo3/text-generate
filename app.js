const btn = document.getElementById("render");
const divEl = document.getElementById("box");
async function getData() {
  const req = await fetch("https://api.adviceslip.com/advice");
  const data = await req.json();

  return data;
}

btn.addEventListener("click", async (e) => {
  e.preventDefault();
  const { slip } = await getData();
  console.log(slip);
  divEl.innerHTML = ` 
  <h1>${slip.id}</h1>
  <p>
    ${slip.advice}
  </p>`;
});
