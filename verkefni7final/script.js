let summa = 0;
let guess = 0;
const games = [];
let moves = 0;

function start() {
  play();

  if (confirm("Viltu spila aftur?"))
    start();
  else
    getResults(); 
}

function getResults() {
    if (games.length === 0)
      alert("");
    else
      alert("Þú spilaðir " + games.length + " Leiki og meðalfjöldi ágiskana var " + calculateAverage(games));
  }

function play() {
     var correct = randomNumber(100);
    do {
    var input = (prompt("Giskaðu á tölu á milli 0 og 100"));

    if (input === null)
        break;

    guess = parseGuess(input);
    getResponse(guess, correct);
    moves++;
    console.log(randomNumber);
  }
  while (guess !== correct);

  if (guess === correct)
    games.push(moves);
}
  function getResponse(guess, correct) {
    if (guess < 0 ) 
      alert ("Ekki rétt");
    else if (guess === correct)
      alert ("Rétt");
    else if (Math.abs(correct-guess) < 5)
      alert ("Mjög nálægt");
    else if (Math.abs(correct-guess) < 10)
      alert ("Nálægt");
    else if (Math.abs(correct-guess) < 20)
      alert ("Frekar langt frá");
    else if (Math.abs(correct-guess) < 50)
      alert ("langt frá");
    else
      alert ("mjög langt frá");
      console.log(guess);
  }
function calculateAverage(games) {
  for (var i=0; i< games.length; i++) {
    summa += games[i];
  }
  return (summa/games.length);
}
function parseGuess(input) {
  return (parseInt(input));
}

function randomNumber(max) {
  return (Math.floor(Math.random() * 101));
}

start();