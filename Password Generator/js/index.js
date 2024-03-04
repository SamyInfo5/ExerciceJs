const textBox = document.getElementById("pswd");
const copy = document.getElementById("copy");
const generate = document.getElementById("generate");
const character =
  "ABCDEFGHIJKLMNOPKRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890@&_";
let password = "";

const random = Math.random() * 20 + 5;

generate.addEventListener("click", () => {
  password = "";
  for (var i = 0; i < random; i++) {
    password += character.charAt(Math.floor(Math.random() * character.length));
  }
  textBox.innerHTML = password;
});

const copyPassword = async () => {
    const copyText = document.getElementById('pswd').innerHTML
    try{
        await navigator.clipboard.writeText(copyText);
        console.log('Content copied to clipboard');
    } catch (err) {
        console.error('Failed COpy : ', err)
    }
};


