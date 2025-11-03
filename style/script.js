const sound = document.getElementById('popsound');
const nyanCat = document.getElementById('nyan-cat');
const meow = document.getElementById('meosound');

nyanCat.addEventListener('click', () => {
  meow.play();
});

nyanCat.addEventListener('touchstart', () => {
  meow.play();
});

const messages = [
  "Chúc chồng yêu 19/11 vui vẻ 💕", "Em thương anh 🤗", "I Love You 🥰", "Chúc anh thành công", "Chúc anh luôn vững chãi", "Mãi bên cạnh em nhé",
   "❤️ Gửi ngàn lời yêu thương tới anhiu❤️", "Anh hãy luôn vui vẻ và mỉm cười nhé 😊",
  "Love You 3000 💖","Lê Tấn Thanh" "Em iu anhhhhhh", "Hong được buồn nữa nha", "Có em luôn bên cạnh anh mà",
  "Anh là một món quà 🎁",
  "Happy Boy's Day 19/11💐", "Love You In Every Universe",
  "Anh là duy nhất 💞", "Saranghaeyo❤️",
  "Em nhớ anh nhiều 🌈", "You Are My Everything"
 
];

function showRandomMessage(event) {
  sound.play();
  const msg = document.createElement("div");
  msg.className = "message";
  msg.textContent = messages[Math.floor(Math.random() * messages.length)];

  const directions = [0, Math.PI/4, Math.PI/2, 3*Math.PI/4, Math.PI, 5*Math.PI/4, 3*Math.PI/2, 7*Math.PI/4];
  const angle = directions[Math.floor(Math.random() * directions.length)];
  const distance = 200;
  const dx = Math.cos(angle) * distance + "px";
  const dy = Math.sin(angle) * distance + "px";
  msg.style.setProperty('--dx', dx);
  msg.style.setProperty('--dy', dy);

  const rect = event.currentTarget.getBoundingClientRect();
  msg.style.left = rect.left + rect.width / 2 + "px";
  msg.style.top = rect.top + rect.height / 2 + "px";
  msg.style.transform = "translate(-50%, -50%)";
  msg.style.position = "fixed";

  document.body.appendChild(msg);

  setTimeout(() => msg.remove(), 3000);
}

