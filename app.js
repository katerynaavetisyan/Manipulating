console.log(document.querySelector('#banner').id = 'whoops');
console.log(document.querySelector('#whoops').id = 'banner');
console.log(document.querySelector('a').href);
console.log(document.querySelector('a').title);

const firstLink = document.querySelector('a');

console.log(firstLink.href);
console.log(firstLink.getAttribute('href'));
console.log(firstLink.getAttribute('href'));

console.log(firstLink.getAttribute('title'));
console.log(firstLink.setAttribute('href', 'http://www.google.com'));


console.log(document.querySelectorAll('input')[1]);

const input = document.querySelector('input[type="text"]');

console.log(input.type = 'color '); input.type = 'color';

input.setAttribute('type', 'text')