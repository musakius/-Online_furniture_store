function registration() {

    function getUser(){
         return JSON.parse(localStorage.getItem('cart'));
    }
    function setUser(element){
         localStorage.setItem('cart', JSON.stringify(element));
         return false;
    }

    let arr = [];
    if(getUser() != null){
        arr = getUser();
    }
    let obj = {};
    let login = document.getElementById('input_login');
    let password = document.getElementById('input_password');
    let content = document.getElementById('content_user');
    let finish = document.querySelector('.finish');

    btn_primary.addEventListener('click', function() {
        if(!(login.value == '' || password.value == '')){
        obj[login.name] = login.value;
        obj[password.name] = password.value;
        arr.push(obj);
        setUser(arr);
        content.style.display = 'none';
        regist.style.display = 'none';
        finish.style.display = 'block';
        }
    })
    
}
registration();