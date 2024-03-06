console.log('ça fonctionne No Stress :) !');

const btnAddUser = document.getElementById('addUsers');
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

const getData = (data) => {
  if(!data) return
  data.forEach(item => {
      const tr = document.createElement('tr')
      const tbody = document.getElementById('tbody')
      tbody.appendChild(tr)
      item.forEach(element => {
          const th = document.createElement('th')
          th.innerHTML = element
          tr.appendChild(th)
      });
  })
}

const filterAge = (data) => {
  const trdel = document.querySelectorAll('tbody tr')
  trdel.forEach((item => { console.log('item'), item.remove() }))
  data.sort((a, b) => parseInt(a[1]) - parseInt(b[1]));
  getData(data)
}

const filterName = (data) => {
  const trdel = document.querySelectorAll('tbody tr')
  trdel.forEach((item => { console.log('item'), item.remove() }))
  console.log(data.sort())
  data.sort()
  getData(data)
}

getData(storage)