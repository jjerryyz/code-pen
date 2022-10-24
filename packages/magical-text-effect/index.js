const colors = ["green", "violet", "white"];

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const animate = (star) => {
  star.style.setProperty("--star-left", `${rand(-10, 100)}%`);
  star.style.setProperty("--star-top", `${rand(-40, 80)}%`);
  // not work
  // star.style.setProperty("--star-fill", colors[rand(0, 2)]);

  // 重新播放动画
  // 方法1 触发 reflow
  star.style.animation = "none";
  star.offsetHeight;
  star.style.animation = "";

  // 方法2 延时设置
  // star.style.animation = "none";
  // setTimeout(() => {
  //   star.style.animation = "";
  // }, 0);

  // 方法3 删除dom后重新插入
  // const cloned = star.cloneNode(true);
  // star.after(cloned);
  // star.parentElement.removeChild(star);
};

let index = 0;
for (const star of document.getElementsByClassName("magic-star")) {
  setTimeout(() => {
    animate(star);
    setInterval(() => animate(star), 1000);
  }, index++ * 333);
}
