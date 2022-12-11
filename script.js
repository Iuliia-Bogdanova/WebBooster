// вешаем функцию на событие onclick по кнопке и получаем event 
postButton.onclick = function (event) {
    // event.preventDefaut(); // отменяет стандартное поведение при отправке формы - позволяет странице не перезагружаться - вроде бв перезагружается все таки ???

    event.preventDefault();

    // затем формируем объект с теми параметрами, которые хотим передать:
    let user = {
        email: document.getElementById("exampleInputEmail1").value,
        password: document.getElementById("exampleInputPassword1").value
    }
    console.log(user); // показал объект при заполнении логина пароля
    fetch("http:/httpbin.org/post", { // тестовый API, выходит ошибка 405 (Method Not Allowed) ???. но должен вернуть ровно то что передали
        method: 'POST',
        body: JSON.stringify(user), // обязательно JSON.stringify, иначе некорректная отправка
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
    })
    .then(response => response.json())
    .then(user => {
        console.log(user);
    })
    .catch(error => console.log(error));
}

// во вкладке Network тоже сработало 405 (Method Not Allowed) ???
// но Payload передал значения мейла и пароля - видим что отправляется на сервер

// можно передавать всю форму целиком без json, но API должен это поддерживать (см видео 2 с 22 мин)
// данные передаются через form data:

// <form method="post" action="/post"> - это видим в консоли

// в коде:
/*
postButton.onclick = function (event) {
    event.preventDefaut(); 
    
    fetch("http:/httpbin.org/post", { 
        method: 'POST',
        body: new FormData(form),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
        },
    })
    .then(response => response.json()) // непонятно, оставляем ли здесь json если теперь form ???
    .then(user => {
        console.log(user);
    })
    .catch(error => console.log(error));
}
*/
