const produkty = [
  {
    nazwa: "Mufa Stalowa SilentCam HX",
    cena: "1 499 PLN",
    sprzedawca: "hydro_tech_77",
    img: "images/zawor.jpg",
    opis: `
    Kamera szpiegowska CCTV ukryta w metalowym zaworze hydraulicznym.
    <br><br>
    • Rozdzielczość 4K<br>
    • Detekcja ruchu<br>
    • Tryb nocny IR<br>
    • Zdalny podgląd Wi-Fi<br><br>
    Przeznaczenie: monitoring mienia prywatnego i przemysłowego.
    `
  },
  {
    nazwa: "1111x",
    cena: "1 499 PLN",
    sprzedawca: "hydro_tech_77",
    img: "images/zawor.jpg",
    opis: `
    Kamera szpiegowska CCTV ukryta w metalowym zaworze hydraulicznym.
    <br><br>
    • Rozdzielczość 4K<br>
    • Detekcja ruchu<br>
    • Tryb nocny IR<br>
    • Zdalny podgląd Wi-Fi<br><br>
    Przeznaczenie: monitoring mienia prywatnego i przemysłowego.
    `
  },
  {
    nazwa: "22221x",
    cena: "1 499 PLN",
    sprzedawca: "hydro_tech_77",
    img: "images/zawor.jpg",
    opis: `
    Kamera szpiegowska CCTV ukryta w metalowym zaworze hydraulicznym.
    <br><br>
    • Rozdzielczość 4K<br>
    • Detekcja ruchu<br>
    • Tryb nocny IR<br>
    • Zdalny podgląd Wi-Fi<br><br>
    Przeznaczenie: monitoring mienia prywatnego i przemysłowego.
    `
  },
  {
    nazwa: "3311x",
    cena: "1 499 PLN",
    sprzedawca: "hydro_tech_77",
    img: "images/zawor.jpg",
    opis: `
    Kamera szpiegowska CCTV ukryta w metalowym zaworze hydraulicznym.
    <br><br>
    • Rozdzielczość 4K<br>
    • Detekcja ruchu<br>
    • Tryb nocny IR<br>
    • Zdalny podgląd Wi-Fi<br><br>
    Przeznaczenie: monitoring mienia prywatnego i przemysłowego.
    `
  },
  {
    nazwa: "11rrrrrrr11x",
    cena: "1 499 PLN",
    sprzedawca: "hydro_tech_77",
    img: "images/zawor.jpg",
    opis: `
    Kamera szpiegowska CCTV ukryta w metalowym zaworze hydraulicznym.
    <br><br>
    • Rozdzielczość 4K<br>
    • Detekcja ruchu<br>
    • Tryb nocny IR<br>
    • Zdalny podgląd Wi-Fi<br><br>
    Przeznaczenie: monitoring mienia prywatnego i przemysłowego.
    `
  },
  {
    nazwa: "Trójnik Instalacyjny T-Spy Pipe",
    cena: "1 099 PLN",
    sprzedawca: "silent_install",
    img: "images/trojnik.jpg",
    opis: `
    Szpiegowska kamera przemysłowa zamknięta w trójniku rurowym.
    <br><br>
    • Full HD 1080p<br>
    • Obiektyw szerokokątny<br>
    • Obudowa stalowa<br>
    `
  },
  {
    nazwa: "Zawór Kulowy VK-Spy Cam 4K",
    cena: "899 PLN",
    sprzedawca: "pipe_black_ops",
    img: "images/mufa.jpg",
    opis: `
    Ukryta kamera szpiegowska CCTV w mufie hydraulicznej.
    <br><br>
    • Monitoring 24/7<br>
    • Niewidoczna dioda IR<br>
    • Nagrywanie lokalne<br>
    `
  }
];

const aukcje = document.getElementById("aukcje");
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modalContent");

produkty.forEach(p => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${p.img}">
    <h3>${p.nazwa}</h3>
    <div class="price">${p.cena}</div>
    <div class="seller">sprzedawca: ${p.sprzedawca}</div>
  `;
  card.onclick = () => openModal(p);
  aukcje.appendChild(card);
});

function openModal(p) {
  modalContent.innerHTML = `
    <h2>${p.nazwa}</h2>
    <img src="${p.img}" style="width:100%;margin:10px 0">
    <p>${p.opis}</p>
    <div class="price">${p.cena}</div><br>
    <button onclick="closeModal()">Zamknij aukcję</button>
  `;
  modal.classList.remove("hidden");
}

function closeModal() {
  modal.classList.add("hidden");
}
