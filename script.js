const span = document.getElementsByTagName('span')[0];

const button = document.getElementById("click-button");

button.addEventListener('click', function() {

    const randomNumber = Math.random() * 101;

    span.innerText = Math.trunc(randomNumber);

    console.log(span);
    console.log(randomNumber);
});
