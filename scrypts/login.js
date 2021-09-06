function clientLogin() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    console.log(username, password);

    fetch("https://qat-motors-api.herokuapp.com/client-login", {
        method: 'PATCH',
        body: JSON.stringify({
            username,
            password
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
    .then((result) => result.json())
    .then((data) => {
        console.log(data);
    }); 
}



   
