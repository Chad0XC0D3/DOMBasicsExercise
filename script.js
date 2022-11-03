// 1
const xMen = document.getElementById(`x-men`);
// 2
const centered = document.getElementsByClassName(`center`);
// 3
const batman = document.querySelector(`#batman`);
// 4
const h3s = document.querySelectorAll(`h3`);
// 5
const h1 = document.querySelector(`h1`);
h1.innerText = `The Best Animated Superhero TV Shows Ever!`;
// 6
const honorableMentions = document.querySelector(`#honorable-mentions`);
honorableMentions.innerHTML = '<p>OTHER GREAT SHOWS</p>'
// 7
const aTag = document.querySelector('a');
aTag.innerHTML = `<a href=""https://fandomwire.com/15-greatest-animated-superhero-shows-ever-made-ranked/&quot;">The Best Animated Superhero TV Shows Ever</a>`
// 8
h1.classList.add('background','text-color');
// 9
h1.classList.remove('background');
// 10a
const h4 = document.createElement('h4');
h4.innerText = `Is Avatar: The Last Airbender A Superhero Show?`;
const body = document.querySelector(`body`);
body.prepend(h4);

// 11
const h5 = document.createElement('h5');
h5.innerText = `Heroes in a half shell Turtle Power!`;

aTag.insertAdjacentElement("afterend", h5);

// 12
document.querySelector('ul>li').remove();

// 13
const divs = document.querySelectorAll('div');

for(i=0; i<divs.length; i++){
    divs[i].classList.toggle(`background`);
}

// for(d of divs){
//     d.classList.toggle('background');
// }

// 14
const avengers = ["Forever", "Fight", "As", "One", "AVENGERS", "ASSEMBLE!"];

for(a of avengers){
    const spanLoop = document.createElement('span');
    spanLoop.innerText = `${a} `;
    body.append(spanLoop);
}