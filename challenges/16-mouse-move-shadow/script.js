(() => {
  const hero = document.querySelector(".hero");
  const h1 = document.querySelector(".hero  h1");
  const walk = 500;

  const generateShadow = (e) => {
    let { offsetX: x, offsetY: y } = e;

    if (e.currentTarget !== e.target) {
      x += e.target.offsetLeft;
      y += e.target.offsetTop;
    }

    const xWalk = Math.round((x / hero.offsetWidth) * walk - walk / 2),
      yWalk = Math.round((y / hero.offsetHeight) * walk - walk / 2);

    h1.style.textShadow = `
     ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
     ${-xWalk}px ${yWalk}px 0 rgba(0,255,255,0.7),
     ${yWalk}px ${-xWalk}px 0 rgba(0,255,0,0.7),
     ${-yWalk}px ${-xWalk}px 0 rgba(0,0,255,0.7)
    `;
  };

  hero.addEventListener("mousemove", generateShadow);
})();
