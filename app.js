const allLinks = document.querySelectoAll('a');

for (let link of allLinks) {
    link.style.color = 'lime';
    link.style.textDecorationColor = 'green';
    link.style.textDecorationStyle = 'wavy'
}