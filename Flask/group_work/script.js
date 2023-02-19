console.log("HI");
console.log("hi");

function rezrdxctvb() {
  console.log("s");
  const { Configuration, OpenAIApi } = require("openai");
  
  const configuration = new Configuration({
    apiKey: "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",
  });
  const openai = new OpenAIApi(configuration);
  
  const response = openai.createCompletion({
    model: "text-davinci-003",
    prompt: "find the title of 3 books similar to the great gatsby",
    temperature: 0.7,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  console.log(response.choices[0].text);
}

//   const socket = new WebSocket('ws://localhost:5000/my-python-function');
//   socket.onopen = function(event) {
//       console.log('WebSocket connection opened.');
//   };
//   socket.onmessage = function(event) {
//       console.log('Received message:', event.data);
//   };
//   socket.onerror = function(event) {
//       console.error('WebSocket error:', event);
//   };
// };



// button information send
info = getElementById('info');
function movie_info() {
  alert(info.value);
}
function book_info(){
  alert(info.value);
}
function song_info(){
  alert(info.value);
}
