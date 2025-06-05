
  const texts = ["Akinola Victor", "Glad to meet you!"];
  let i = 0;
  let j = 0;
  let currentText = "";
  let isDeleting = false;

  const typingText = document.querySelector(".typing-text");

  function typeEffect() {
    if (!isDeleting && j < texts[i].length) {
      currentText += texts[i][j];
      j++;
      typingText.textContent = currentText;
      setTimeout(typeEffect, 170);
    } else if (isDeleting && j > 0) {
      currentText = currentText.slice(0, -1);
      j--;
      typingText.textContent = currentText;
      setTimeout(typeEffect, 60);
    } else {
      if (!isDeleting) {
        isDeleting = true;
        setTimeout(typeEffect, 1000);
      } else {
        isDeleting = false;
        i = (i + 1) % texts.length;
        currentText = "";
        j = 0;
        setTimeout(typeEffect, 500);
      }
    }
  }

  typeEffect();

