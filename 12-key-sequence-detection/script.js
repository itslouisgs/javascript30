() => {
  const pressedKeys = [],
    secretCode = "louis";

  window.addEventListener("keyup", (e) => {
    secretCode[pressedKeys.length]
      ? pressedKeys.push(e.key)
      : (pressedKeys.length = 0);

    if (secretCode === pressedKeys.join("")) {
      console.log("Knock knock knock!");
      cornify_add();
    }
  });
};
