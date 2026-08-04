document.querySelector("#openBtn").addEventListener("click", () => {
  document.body.innerHTML = `
    <div style="padding:40px;text-align:center;max-width:700px;margin:auto;">

      <div style="font-size:55px;">💍</div>

      <h1>Wedding Invitation</h1>

      <h2>Fathima Rabeeha ❤️ Muhammad Irshad</h2>

      <p><strong>Date:</strong> Sunday, 30 August 2026</p>

      <p><strong>Time:</strong> 11:00 AM – 02:00 PM</p>

      <p><strong>Venue:</strong> KC Auditorium, Kunnappalli</p>

      <p>
        <a href="https://maps.google.com/?q=KC+Auditorium+Kunnappalli"
           target="_blank"
           style="
             display:inline-block;
             margin-top:15px;
             padding:12px 25px;
             background:#9b7428;
             color:white;
             text-decoration:none;
             border-radius:30px;
             font-size:18px;">
          📍 View Location
        </a>
      </p>
</a>
</p>

<div id="countdown"></div>

<h3>✨ We warmly invite you to our Nikah Ceremony ✨</h3>
      <h3>✨ We warmly invite you to our Nikah Ceremony ✨</h3>

    </div>
  `;
});
const weddingDate = new Date("August 30, 2026 11:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  const countdown = document.getElementById("countdown");

  if (countdown) {
    countdown.innerHTML =
      `⏳ ${days} Days ${hours} Hours ${minutes} Minutes Left`;
  }
}, 1000);
