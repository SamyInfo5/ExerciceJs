const first_Name = document.getElementById("first_name");
const last_Name = document.getElementById("last_name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirm_password = document.getElementById("confirmpassword");
const succes = document.getElementById("succes");
const succes_Text = document.getElementById("box_succes_text");
const error = document.getElementById("not_succes");
const error_Text = document.getElementById("box_error_text");
const btn = document.getElementById("validators");
let letter = document.getElementById("letter");
let capital = document.getElementById("capital");
let number = document.getElementById("number");
let length = document.getElementById("length");

password.onfocus = () => {
  document.getElementById("message").style.display = "block";
};

password.onblur = () => {
  document.getElementById("message").style.display = "none";
};

password.onkeyup = () => {
  let lowerCaseLetters = /[a-z]/g;
  if (password.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }

  // Validate capital letters
  let upperCaseLetters = /[A-Z]/g;
  if (password.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  let numbers = /[0-9]/g;
  if (password.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  // Validate length
  if (password.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
};

btn.addEventListener("click", () => {
  if (first_Name.value === "" || last_Name.value === "" || email.value === "") {
    error_Text.innerHTML = "Please fill in the fields";
    error.classList.add("active");
    setTimeout(() => {
      delete_message(error);
    }, 1000);
  } else {
    validator_password(password.value, confirm_password.value);
    if (validator_password() == true) {
      succes.classList.add("active");
      delete_message(succes);
    }
  }
});

const delete_message = (element) => {
  element.classList.remove("active");
  console.log("coucou");
};

const validator_password = (password_one, password_two) => {
  if (password_one == "" || password_two == "") return;
  if (password_two != password_one) {
    error_Text.innerHTML = "Passwords are not the same";
    error.classList.add("active");
    setTimeout(() => {
      delete_message(error);
    }, 1000);
  } else {
    return true;
  }
};
