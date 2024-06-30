const circle = document.querySelector('#circle')
const articles = document.querySelectorAll('article')

for (let article of articles) {
    article.addEventListener("mouseenter", e=> {
      circle.style.animationPlayState = "paused";
    });
  article.addEventListener("mouseleave", e=> {
    circle.style.animationPlayState = "running";
  })
}