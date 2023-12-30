const form = document.getElementById('form')
const password1Ele = document.getElementById('password1')
const password21Ele = document.getElementById('password2')
const messageContainer = document.querySelector('.message-container')
const message = document.getElementById('message')


let isValid = false;
let passwordMatched = false;


function makePasswordVisiable() {
  if (password1Ele.type == 'password') {
    password1Ele.type = 'text'
  } else {
    password1Ele.type = 'password'
  }
}


function checkValidate() {

  isValid = form.checkValidity()

  if (!isValid) {
    message.textContent = "Please fill our fields"
    message.style.color = 'red'
    messageContainer.style.borderColor = 'red'
    return;
  }
  //Check if  passwords match

  if (password1Ele.value === password21Ele.value) {
    passwordMatched = true
    password1Ele.style.borderColor = 'green'
    password21Ele.style.borderColor = 'green'
  } else {
    passwordMatched = false
    message.textContent = "Make sure that passwords match"
    message.style.color = 'red'
    messageContainer.style.borderColor = 'red'
    password1Ele.style.borderColor = 'red'
    password21Ele.style.borderColor = 'red'
    return;
  }

  if (isValid && passwordMatched) {
    message.textContent = "Successfuly registered"
    message.style.color = 'green'
    messageContainer.style.borderColor = 'green'


  }




}

function storeUserData() {
  const user = {
    name: form.name.value,
    email: form.email.value,
    password: form.password.value,
    phone: form.phone.value,
    website: form.website.value
  }
  console.log(user);
}



function processFormData(e) {

  e.preventDefault();
  checkValidate()

  if (isValid && passwordMatched) {
    storeUserData()
  }

}



form.addEventListener('submit', processFormData)

