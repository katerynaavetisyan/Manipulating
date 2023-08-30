// const h1 = document.querySelectorAll('h1')
// console.dir(h1)
// console.log(document.querySelector('p').innerText = 'Happy Chicken');
const allLinks = document.querySelectorAll('a');
for (let link of allLinks) {
    link.innerText = 'I am happy'
}

document.querySelector('p').innerHTML = '<b> Happiness</b>'

const test = document.querySelector('span').innerText = "Disgusting";