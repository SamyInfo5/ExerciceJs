console.log('ça fonctionne No Stress :) !');

const btnAddUser = document.getElementById('addUsers');
const btnOrderLetters = document.getElementById('orderletters');
const btnOrderNumber = document.getElementById('ordernumber');
const BoxAddUsers = document.getElementById('BoxAddUsers');
const sendForm = document.getElementById('sendForm');
let storage = JSON.parse(localStorage.getItem("UserData"));
console.log(storage)

btnAddUser.addEventListener('click', () => {
    BoxAddUsers.style.display = "flex"
})

sendForm.addEventListener('click', (e) => {
    e.preventDefault()
    const uValue = document.getElementById('user').value
    const aValue = document.getElementById('age').value
    const tValue = document.getElementById('tel').value
    const AdValue = document.getElementById('adress').value
    const data = [ uValue, aValue, tValue, AdValue ]
    const tr = document.createElement('tr')
    const tbody = document.getElementById('tbody')
    tbody.appendChild(tr)
    data.forEach(element => {
        const th = document.createElement('th')
        th.innerHTML = element
        tr.appendChild(th)
    });
    BoxAddUsers.style.display = "none"
    saveData(data)
});

const saveData = (list) => {
    if (storage) {
      storage.push(list);
      localStorage.setItem("UserData", JSON.stringify(storage));
    } else {
      storage = [];
      storage.push(list);
      localStorage.setItem("UserData", JSON.stringify(storage));
    }
  };

  
storage.forEach(item => {
    const tr = document.createElement('tr')
    const tbody = document.getElementById('tbody')
    tbody.appendChild(tr)
    item.forEach(element => {
        const th = document.createElement('th')
        th.innerHTML = element
        tr.appendChild(th)
    });
})


btnOrderLetters.addEventListener('click', () => {

})

btnOrderNumber.addEventListener('click', () => {

})