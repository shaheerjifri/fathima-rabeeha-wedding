// Cover Screen
const enterBtn = document.getElementById("enterBtn");

if (enterBtn) {
  enterBtn.addEventListener("click", () => {
    const cover = document.getElementById("cover");

    cover.style.opacity = "0";

    setTimeout(() => {
      cover.style.display = "none";
    }, 1000);
  });
}

// Open Invitation
const openBtn = document.getElementById("openBtn");

if (openBtn) {
  openBtn.addEventListener("click", () => {

    document.getElementById("cover").style.display = "none";
    document.getElementById("invitation").style.display = "block";

    startCountdown();

  });
}

// Countdown
function startCountdown(){

  const target = new Date("2026-08-30T11:00:00").getTime();

  const timer = setInterval(() => {

    const now = new Date().getTime();

    const distance = target - now;

    if(distance <= 0){

      document.getElementById("countdown").innerHTML =
      "🎉 Today is the Wedding Day";

      clearInterval(timer);

      return;
    }

    const days = Math.floor(distance/(1000*60*60*24));

    const hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));

    const minutes = Math.floor((distance%(1000*60*60))/(1000*60));

    document.getElementById("countdown").innerHTML =
    `⏳ ${days} Days ${hours} Hours ${minutes} Minutes Left`;

  },1000);

}
