const revealItems = document.querySelectorAll(".reveal, .reveal-line");

const days = [
  "DOMINGO",
  "LUNES",
  "MARTES",
  "MI\u00c9RCOLES",
  "JUEVES",
  "VIERNES",
  "S\u00c1BADO"
];

const months = [
  "ENERO",
  "FEBRERO",
  "MARZO",
  "ABRIL",
  "MAYO",
  "JUNIO",
  "JULIO",
  "AGOSTO",
  "SEPTIEMBRE",
  "OCTUBRE",
  "NOVIEMBRE",
  "DICIEMBRE"
];

const today = new Date();
const banner = document.getElementById("data-banner");

if (banner) {
  const dayName = days[today.getDay()];
  const day = String(today.getDate()).padStart(2, "0");
  const month = months[today.getMonth()];
  const year = today.getFullYear();
  banner.innerText = `HOY, ${dayName}, ${day} DE ${month} DE ${year} ESTAMOS FINALIZANDO LOS CUPOS 100% GRATUITOS`;
}

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  { threshold: 0.2 }
);

revealItems.forEach((item) => revealObserver.observe(item));
