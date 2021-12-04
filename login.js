const wrongemailorpass = "Invalid User Information."
const emailpass = [
  {email: "6969", pass: "6969"}
]
function logme(email, pass){
  if(!email || !pass) return;
  const emaildiv = document.getElementById(email)
  const passdiv = document.getElementById(pass)
  //
  //
  const find = emailpass.find(({ email }) => email  === emaildiv.value)
  if(find === undefined || !find){
    return alert(wrongemailorpass)
  }else if(find.pass !== passdiv.value){
    return alert(wrongemailorpass)
  }
  localStorage.setItem("token", tokengen(32))
  window.location.replace("/")
}

function tokengen(len){
  let token = ""
  let tokenctr = "abcdefghijklmnopqrstuvwxyz@#$."
  for(i=0; i < len; i++){
    token += tokenctr.charAt(Math.floor(Math.random() * tokenctr.length))
  }
  return token;
}