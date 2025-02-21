let user;
let dbUrl = 'https://jsonplaceholder.typicode.com/posts';
let xhr = new XMLHttpRequest();

const getData = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
};
const sendData = (url, data) => {
  fetch(url, {
    method: 'POST',
    body: data,
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
};

user = getData('db.json');
sendData(dbUrl, user);

xhr.upload.onprogress = function (event) {
  console.log(`Отправлено ${event.loaded} из ${event.total}`);
};
xhr.onloadend = function () {
  if (xhr.status == 201) {
    console.log('Успех');
  } else {
    console.log('Ошибка ' + this.status);
  }
};
xhr.open('POST', dbUrl, true);
xhr.send(user);
