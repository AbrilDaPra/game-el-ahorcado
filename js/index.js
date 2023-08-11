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

for (let i = 0; i < randomWord.length; i++) {
    elementWords.innerHTML += "<span>_</span>";
}

let guessedLetters = new Set();
let elementKeyboard = document.getElementById("keyboard");

elementKeyboard.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        let letter = event.target.value;
        
        if (randomWord.includes(letter)) {
            guessedLetters.add(letter);

            for (let i = 0; i < randomWord.length; i++) {
                if (randomWord[i] === letter) {
                    elementWords.children[i].textContent = letter;
                }
            }
        }
    }
});

let elementIncorrectLetters = document.getElementById("incorrectLetters");

elementKeyboard.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        let letter = event.target.value;

        if (!randomWord.includes(letter) && !guessedLetters.has(letter)) {
            guessedLetters.add(letter);
            elementIncorrectLetters.textContent += letter + " ";
        } else if (randomWord.includes(letter)) {
            for (let i = 0; i < randomWord.length; i++) {
                if (randomWord[i] === letter) {
                    elementWords.children[i].textContent = letter;
                }
            }
        }
    }
});