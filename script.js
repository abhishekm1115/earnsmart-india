const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

const tips = {
  "Freelancing": "आज एक सेवा चुनें। उसके 3 sample projects बनाएँ और एक छोटा portfolio तैयार करें। पहले काम और ग्राहक की जरूरत समझें—कमाई की गारंटी नहीं होती।",
  "YouTube & Instagram": "आज एक विषय चुनें और 30 सेकंड की स्क्रिप्ट लिखें: Hook → उपयोगी जानकारी → छोटा निष्कर्ष। पोस्ट करने से पहले आवाज़ और captions जाँचें।",
  "AI Tools": "आज AI से एक छोटा काम करवाएँ—जैसे 5 video ideas। उत्तर की जाँच करें और निजी या गोपनीय जानकारी साझा न करें।",
  "Online Jobs": "आज अपनी skills और education की सूची बनाएँ। कंपनी की official website जाँचें और नौकरी के लिए advance fee, OTP या PIN कभी न दें।"
};

document.getElementById("tipForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const interest = document.getElementById("interest").value;
  document.getElementById("tipResult").textContent = tips[interest] || "कृपया पहले एक विषय चुनें।";
});
