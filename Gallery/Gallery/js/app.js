const mainBox = document.querySelector('.main-box');
const shark = document.querySelector('#shark');
const hammer = document.querySelector('#hammer');
const jump = document.querySelector('#jump');
const attack = document.querySelector('#attack');
const mainBoxText = document.querySelector('.main-box_text');
const main = document.querySelector("#main");


shark.addEventListener('click', (event) => {
    console.log(event.target.src);
    main.src = event.target.src;
    event.preventDefault();
});

hammer.addEventListener('click', (event) => {
    console.log(event.target.src);
    main.src = event.target.src;
    event.preventDefault();
});

jump.addEventListener('click', (event) => {
    console.log(event.target.src);
    main.src = event.target.src;
    event.preventDefault();
});

attack.addEventListener('click', (event) => {
    console.log(event.target.src);
    main.src = event.target.src;
    event.preventDefault();
});
    