import "./index.scss";

import anime from "../node_modules/animejs/lib/anime.es.js";

let columns, rows;
let toggled = true;

const wrapper = document.getElementById("tiles");

const toggle = () => {
  toggled = !toggled;

  document.body.classList.toggle("toggled");
};

const handleOnClick = (index) => {
  toggle();

  anime({
    targets: ".tile",
    opacity: toggled ? 0 : 1,
    delay: anime.stagger(50, {
      grid: [columns, rows],
      from: index,
    }),
  });
};

const createTile = (index) => {
  const tile = document.createElement("div");
  tile.classList.add("tile");
  tile.style.opacity = toggled ? 0 : 1;
  tile.onclick = (e) => handleOnClick(index);
  return tile;
};

const createTiles = (quntity) => {
  Array(quntity)
    .fill()
    .map((_, index) => {
      wrapper.appendChild(createTile(index));
    });
};

const createGrid = () => {
  wrapper.innerHTML = "";

  const size = document.body.clientWith > 800 ? 100 : 50;

  columns = Math.floor(document.body.clientWidth / size);
  rows = Math.floor(document.body.clientHeight / size);

  wrapper.style.setProperty("--columns", columns);
  wrapper.style.setProperty("--rows", rows);

  createTiles(columns * rows);
};

createGrid();

window.onresize = () => createGrid();
