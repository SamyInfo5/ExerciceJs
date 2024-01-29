const username = document.getElementById('username');
const btn = document.getElementById('btnCookie');
const viewCookie = document.getElementById('viewCookie')
let i = 0
const deleteDate = new Date(2024, 1, 24, 17 , 0, 0)


const setCookie = () => {
  i++
  const uValue = username.value;
  const date = new Date(2024, 1, 25, 17 , 0, 0)
  console.log(uValue, date)
  document.cookie = `username=${uValue}; expires=${date}`
  const cookieUser = document.createElement('p')
  const delBtn = document.createElement('button')
  delBtn.innerHTML='Delete cookis'
  delBtn.setAttribute('onclick',"checkCookie()")
  delBtn.id = i
  viewCookie.appendChild(delBtn)
  cookieUser.innerHTML = document.cookie
  viewCookie.appendChild(cookieUser)
}

const delCookie = (user) => {
  console.log()
  document.cookie = `username=${user};expires=${deleteDate}`
  i--
}

const getCookie = (cname) => {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

const checkCookie = () => {
  let user = getCookie("username");
  console.log('user',user)
  delCookie(user)
}

btn.addEventListener('click', () => {
  setCookie()
})

console.log('Cookie', document.cookie)

