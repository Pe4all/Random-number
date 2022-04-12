
// Запись каждой строки кода через пустые строки на самом деле не увеличивает итоговую читабельность и наглядность, а только приводит к росту его высоты и заставляет чаще прокручивать код.


const span = document.getElementsByTagName('span')[0];

const button = document.getElementById("click-button");

button.addEventListener('click', function() {

    const randomNumber = Math.random() * 101;

    span.innerText = Math.trunc(randomNumber);
    // Нужное псевдослучайное число получается после метода Math.trunc, его необходимо было получить полностью в инструкции выше и сохранить в randomNumber

    console.log(span);
    console.log(randomNumber);
});
