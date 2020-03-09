function subcategory() {
    let block_catygory = document.querySelectorAll('.block_catygory');
    let block__radio = document.querySelectorAll('.block__radio');

    for (let i = 0; i < block_catygory.length; i++) {
        block_catygory[i].onclick = function () {
            if (block__radio[i].style.display == 'none') {
                block__radio[i].style.display = 'block';
            } else if (block__radio[i].style.display == 'block') {
                block__radio[i].style.display = 'none';
            }
        }
    }
}
subcategory();

function currentDate() {
    let x = new Date();
    let date = x.getDate();
    if (date <= 10) {
        date = '0' + date;
    }
    let month = x.getMonth() + 1;
    if (month <= 10) {
        month = '0' + month;
    }
    let year = x.getFullYear();
    let dateTasks = date + "." + month + "." + year;
    return dateTasks
}

function selecetImg() {
    let images = document.querySelector('.images').getElementsByTagName('img');
    for (let i = 0; i < images.length; i++) {
        images[i].addEventListener('click', function () {
            images[0].src = images[i].src;
        })
    }
}

