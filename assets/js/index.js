let contrastToggle = false;
const scaleFactor = 1 / 20;

function moveBackground(event) {
  const shapes = document.querySelectorAll(".shape");
  const x = event.clientX * scaleFactor;
  const y = event.clientY * scaleFactor;

  for (let i = 0; i < shapes.length; ++i) {
    const isOdd = i % 2 !== 0;
    const boolInt = isOdd ? -1 : 1;
    shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px) rotate(${x * boolInt * 10}deg)`
  }
}

function toggleContrast() {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
      document.body.classList += " dark-theme"
      document.getElementById("project__img--eprofile").src="https://media.discordapp.net/attachments/993208360746881104/1004325283236675584/unknown.png"
    }
    else {
      document.body.classList.remove("dark-theme")
      document.getElementById("project__img--eprofile").src="https://media.discordapp.net/attachments/993208360746881104/1004405911604965446/unknown.png"
    }
  }
  