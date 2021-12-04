const messagelogs = document.querySelector(".chatlogs");
const button = document.querySelector("#button_send");
const create_message = (msg) => {
 const msgcreate = document.createElement("div");
  msgcreate.innerHTML = `<div class="chat self">
        <div class="user-photo"><img src="img/avatar.png"></div>
        <p class="chat-message">${msg.toString()}</p>
    </div>`;
    messagelogs.appendChild(msgcreate);
  (async () => {
await fetch(`https://ai-bot-website.notsaksh.repl.co/api?message=${msg}`)
.then(async function(response) { return response.json(); })
.then(function(json) {
  console.log(json.message);
 const bot_message = document.createElement("div");
  bot_message.innerHTML = `<div class="chat friend">
        <div class="user-photo"><img src="img/avatar.png"></div>
        <p class="chat-message">${json.message.toString()}</p>
    </div>`;
    messagelogs.appendChild(bot_message);
});
  })()
}

button.addEventListener("click", function() {
 send()
})

document.querySelector('#msgcontent').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      send()
    }
});

function send() {
   const msgdiv = document.getElementById("msgcontent");
  const msgcontent = document.getElementById("msgcontent").value;
  if(msgcontent == "") return;
  create_message(msgcontent);
  msgdiv.value = "";
}