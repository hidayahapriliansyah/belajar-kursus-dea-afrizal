let navbar = document.getElementById("navbar"),
    card = document.querySelectorAll(".card"),
    buttons = document.querySelectorAll("div.card-body a.btn.btn-warningv2"),
    darkmode = document.getElementById("darkmode");
    
const changeDarkmode = () => {
  const isChecked = darkmode.checked;
  if ( isChecked ) {
    document.body.classList.add("darkmode");
    navbar.classList.add("darkmode");
  } else {
    document.body.classList.remove("darkmode");
    navbar.classList.remove("darkmode");
  }

  for(i=0;i<card.length;i++) {
    isChecked ? card[i].classList.add("darkmode") : card[i].classList.remove("darkmode");
  }
  
  for(i=0;i<buttons.length;i++) {
    isChecked ? buttons[i].classList.add("darkmode") : buttons[i].classList.remove("darkmode");
  }
};

addEventListener("change", changeDarkmode, false);