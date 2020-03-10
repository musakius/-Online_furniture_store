function caruselOne() {
    let images = document.querySelectorAll('#gallery .photos img');
    let circle = document.querySelectorAll('#gallery .buttons .circles i');
    let i = 0;

    next.onclick = function () {
        images[i].style.display = 'none';
        if (images[i].style.display == 'none') {
            circle[i].style.color = "#73c0c1";
        }
        i++;
        if (i >= images.length) {
            i = 0;
        }
        images[i].style.display = 'block';
        if (images[i].style.display == 'block') {
            circle[i].style.color = "#fff";
        }
    };

    prev.onclick = function () {
        images[i].style.display = 'none';
        if (images[i].style.display == 'none') {
            circle[i].style.color = "#73c0c1";
        }
        i--;
        if (i < 0) {
            i = images.length - 1;
        }
        images[i].style.display = 'block';
        if (images[i].style.display == 'block') {
            circle[i].style.color = "#fff";
        }
    };

    div_circles.addEventListener('click', function (event) {
        for (let i = 0; i < circle.length; i++) {
            images[i].style.display = 'none';
            circle[i].style.color = "#73c0c1";
            if (event.target && event.target.id == i) {
                images[i].style.display = 'block';
                circle[i].style.color = "#fff";
            }
        }
    })
}
caruselOne();

function caruselTwo() {
    let currentPos = 0;
    const colorWidth = 400;
    let content = document.getElementById("block_stock");
    let next = document.getElementById("right");
    let prev = document.getElementById("left");

    function slide(event) {
        if (event.target.className == "fas fa-chevron-right") {
            if (currentPos === -3 * colorWidth) {
                currentPos = 0;
            } else {
                currentPos = currentPos - colorWidth;
            }
        } else {
            if (currentPos === 0) {
                currentPos = -3 * colorWidth;
            } else {
                currentPos = currentPos + colorWidth;
            }
        }
        content.style.left = currentPos + "px";
    }

    prev.addEventListener("click", slide);
    next.addEventListener("click", slide);
}
caruselTwo();