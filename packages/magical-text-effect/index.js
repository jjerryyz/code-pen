const colors = ["green", "violet", "white"];

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const animate = (star) => {
  star.style.setProperty("--star-left", `${rand(-10, 100)}%`);
  star.style.setProperty("--star-top", `${rand(-40, 80)}%`);
  // not work
  // star.style.setProperty("--star-fill", colors[rand(0, 2)]);

  star.style.animation = "none";
  star.offsetHeight;
  star.style.animation = "";
};

let index = 0;
for (const star of document.getElementsByClassName("magic-star")) {
  setTimeout(() => {
    animate(star);
    setInterval(() => animate(star), 1000);
  }, index++ * 333);
}
