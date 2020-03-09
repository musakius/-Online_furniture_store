function authorization() {
    function getUser(){
         return JSON.parse(localStorage.getItem('cart'));
    }

    let error = document.querySelector('.error_text');

    btn_enter.addEventListener('click', function() {
        for(let i = 0; i < getUser().length; i++) {
            if(getUser()[i].login == enter_login.value && getUser()[i].password == enter_password.value) {
                document.location.href = "./user_account.html";
                break;
            } else if (enter_login.value == '' || enter_password.value == '') {
            } else {
                error.innerHTML = 'Введен неверный логин или пароль';
            }
        }
        
    })
}
authorization();