function displayJoke(response) {
  console.log(response.data.answer);

  new Typewriter("#joke", {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
    delay: 20,
  });
}

function generateJoke(event) {
  event.preventDefault();
  let apiKey = "2046c535afeb092fo82f1d306d8a2b2t";
  let context =
    "Your are a funny AI Assistant that tells short and sweet jokes on planets such as Venus, Mars etc. The joke must be provided in HTML format. Example: <p>this is a joke</p>";
  let prompt = "Generate a short and unique joke on planets.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let jokeElement = document.querySelector("#joke");

  jokeElement.innerHTML = "Generating a joke for you.. please wait";

  console.log("apiKey");
  axios.get(apiUrl).then(displayJoke);
}

let generatorButton = document.querySelector("#generate-joke-button");
generatorButton.addEventListener("click", generateJoke);
