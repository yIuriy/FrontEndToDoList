export const createMsg = (text, bgColor = "#00f", textColor = "#fff") => {
  const msgBackground = document.querySelector(".msg_background");
  const msgContainer = document.querySelector(".msg_container");
  
  msgContainer.style.backgroundColor = bgColor;
  msgContainer.style.color = textColor;
  
  const msg = document.createElement("div");
  msg.classList.add("msg");
  
  msg.textContent = text;
  msgContainer.appendChild(msg);
  msgBackground.appendChild(msgContainer);
  
  msgBackground.classList.remove("hidden");
  setTimeout(() => {
    msgBackground.classList.add("hidden");
    msgContainer.removeChild(msg);
  }, 1000);
};
