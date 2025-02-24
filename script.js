let user;
let dbUrl = 'https://jsonplaceholder.typicode.com/posts';
let xhr = new XMLHttpRequest();

const getData = (url) => {
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error));
};

const sendData = (url, data) => {
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .catch((error) => console.error(error));
};

getData('db.json').then((data) => {
  sendData(dbUrl, data);
});

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
