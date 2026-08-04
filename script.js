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

    document.body.innerHTML = `
      <div class="container">

        <div class="bismillah">﷽</div>

        <h1>Fathima Rabeeha <br> & <br> Muhammad Irshad</h1>

        <p><strong>Date:</strong><br>30 August 2026 (Sunday)</p>

        <p><strong>Time:</strong><br>11:00 AM – 02:00 PM</p>

        <p><strong>Venue:</strong><br>KC Auditorium, Kunnappalli</p>

        <p>
          <a href="https://maps.google.com/?q=KC+Auditorium+Kunnappalli"
          target="_blank">
          📍 View Location
          </a>
        </p>

        <div id="countdown"></div>

        <h3>
        ✨ We warmly invite you to our Nikah Ceremony ✨
        </h3>

      </div>
    `;

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
