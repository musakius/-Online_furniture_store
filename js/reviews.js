let but_reviews = document.querySelector('.reviews');
let block_reviews = document.querySelector('.container_reviews');
let block_description = document.querySelector('.block_description');

function loadText() {
    if (localStorage.getItem('reviewsList')) {
        document.querySelector(".spisok_reviews").innerHTML = localStorage.getItem('reviewsList');
    }
}

but_reviews.addEventListener('click', function () {

    let spisok = document.querySelector(".spisok_reviews");
    let input_name = document.querySelector(".input_name");
    let text_reviews = document.querySelector(".text_reviews");

    let dateTasks = currentDate();


    let li = document.createElement("li");
    let spanName = document.createElement("span");
    let spanDate = document.createElement("span");
        spanDate.className = "data";
    let text = document.createElement("p");
    let newName = input_name.value;
        input_name.value = '';
    let newText = text_reviews.value;
        text_reviews.value = '';

    spisok.appendChild(li).append(spanName, spanDate, text);
    spanName.append(newName);
    spanDate.append(dateTasks);
    text.append(newText);

    localStorage.setItem('reviewsList', spisok.innerHTML);
});
loadText();

function displayReviews() {
    op.addEventListener('click', function () {
        block_description.style.display = 'block';
        block_reviews.style.display = 'none';
        ot.style.backgroundColor = '#fff';
        op.style.backgroundColor = '#e9e9e9';
    });
    ot.addEventListener('click', function () {
        block_description.style.display = 'none';
        block_reviews.style.display = 'block';
        op.style.backgroundColor = '#fff';
        ot.style.backgroundColor = '#e9e9e9';
    });
}
displayReviews();