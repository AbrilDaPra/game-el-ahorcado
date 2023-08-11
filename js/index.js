let categories = [
    {categorie: "Literatura", words: ["thriller", "biblioteca", "novela", "mujercitas", "frankenstein"]},
    {categorie: "Transporte", words: ["colectivo", "tren", "automovil", "avion", "camiones"]},
    {categorie: "Colores", words: ["violeta", "rojo", "amarillo", "azul", "verde agua"]},
    {categorie: "Tecnologia", words: ["computadora", "teclado", "celular", "aspiradora", "microondas"]},
    {categorie: "Animales", words: ["perro", "gato", "elefante", "tigre", "pájaro"]},
    {categorie: "Ropa", words: ["remera", "pantalon", "buzo", "campera", "pantalones cortos"]},
    {categorie: "Familia", words: ["madre", "padre", "abuelos", "tio", "primos"]},
    {categorie: "Deportes", words: ["football", "basketball", "hockey", "voleyball", "natacion"]},
    {categorie: "Peliculas", words: ["la bella durmiente", "matilda", "winnie pooh", "barbie", "volt"]},
    {categorie: "Medicina", words: ["medico", "sanatorio", "febricula", "receta", "antibiotico"]}
];

let randomIndex = Math.floor(Math.random() * categories.length);
let randomCategorie = categories[randomIndex];
let randomWordIndex = Math.floor(Math.random() * randomCategorie.words.length);
let randomWord = randomCategorie.words[randomWordIndex];

let elementCategorie = document.getElementById("categorie");
elementCategorie.querySelector("p").textContent = randomCategorie.categorie;

let elementWords = document.getElementById("words");
elementWords.innerHTML = "";

let guessedLetters = new Set();
let incorrectLetters = new Set();
let elementKeyboard = document.getElementById("keyboard");
let elementIncorrectLetters = document.getElementById("incorrectLetters");

let remainingAttempts = 8;
let elementRemainingAttempts = document.getElementById("remainingAttempts");

let lostModal = document.getElementById("lostModal");
let closeModal = document.querySelector(".close");
let lostMessage = document.querySelector("#lostModal .modal-content p");

let incorrectAttempts = 0;
let hangmanSteps = [
    "O",
    "|<br>|",
    "/<br>",
    "\\<br>",
];
let hangmanElement = document.getElementById("hangman");

for (let i = 0; i < randomWord.length; i++) {
    elementWords.innerHTML += "<span>_</span>";
}

elementKeyboard.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON" && remainingAttempts > 0) {
        let letter = event.target.value;
        
        if (!guessedLetters.has(letter)) {
            guessedLetters.add(letter);

            if (randomWord.includes(letter)) {
                for (let i = 0; i < randomWord.length; i++) {
                    if (randomWord[i] === letter) {
                        elementWords.children[i].textContent = letter;
                    }
                }
            } else {
                incorrectLetters.add(letter);
                elementIncorrectLetters.textContent = Array.from(incorrectLetters).join(" ");
                remainingAttempts--;
                elementRemainingAttempts.textContent = remainingAttempts;

                if (remainingAttempts === 0) {
                    lostModal.classList.add("modal");
                } else {
                    incorrectAttempts++;
                    hangmanElement.innerHTML = hangmanSteps.slice(0, incorrectAttempts).join("<br>");
                }
            }
        }
    }
});

closeModal.addEventListener("click", () => {
    lostModal.classList.remove("modal");
});
