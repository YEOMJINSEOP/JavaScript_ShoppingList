horizontalLine = document.querySelector('.horizontal_line');
verticalLine = document.querySelector('.vertical_line');
aim = document.querySelector('.aim');

aimHalfHeight = aim.getBoundingClientRect().height / 2;
aimHalfWidth = aim.getBoundingClientRect().width / 2;

document.addEventListener('mousemove', (e) => {
    const clientX = e.clientX;
    const clientY = e.clientY;
    horizontalLine.style.transform = `translateY(${clientY}px)`;
    verticalLine.style.transform = `translateX(${clientX}px)`;
    aim.style.transform = `translate(${clientX - aimHalfWidth}px, ${clientY-aimHalfHeight}px)`;
})