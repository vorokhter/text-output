window.addEventListener("DOMContentLoaded", () => {
  const content = document.getElementsByClassName("content")[0];

  print({
    node: content,
    text: "Дарья",
    timeout: 100,
    letterSizePxs: 14,
    letterIncreaseValue: 1,
    repeat: true,
  });
});

function print({
  node,
  text,
  timeout = 500,
  letterSizePxs = 14,
  letterIncreaseValue,
  repeat = false,
  onEnd,
}) {
  const letters = text.split("");

  let textShadowX = -5;
  let textShadowY = -5;

  let index = letters.length;

  const printInterval = setInterval(() => {
    if (index === 0) {
      if (repeat) {
        index = letters.length;
      } else {
        onEnd();
        clearInterval(printInterval);
      }
    }

    const letter = letters[letters.length - index];

    const letterElement = document.createElement("div");

    letterElement.textContent = letter;
    letterElement.style = `font-size: ${letterSizePxs}px; text-shadow: ${textShadowX}px ${textShadowY}px gray;`;

    node.append(letterElement);

    if (!!letterIncreaseValue && letterSizePxs < 750)
      letterSizePxs += letterIncreaseValue;

    textShadowX -= 1;
    textShadowY -= 1;

    index--;
  }, timeout);
}
