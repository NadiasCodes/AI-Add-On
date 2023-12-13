function showAnswer(response) {
  alert(response.data.answer);
}

let apiKey = "57t510363ca64d76cf8d437ao0eea1eb";
let context = "be polite and provide a short answer";
let prompt =
  "who was the first female president";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

axios.get(apiUrl).then(showAnswer);
