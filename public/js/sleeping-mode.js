
const sleepTimeout = 60000; 
const sleepingScreen = document.querySelector('.sleeping-screen');
const container = document.querySelector('.container');

let timer = setTimeout(() => {
    container.style.display = 'none';
    sleepingScreen.style.display = 'block';
}, sleepTimeout);

document.addEventListener('mousemove', () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
        container.style.display = 'none';
        sleepingScreen.style.display = 'block';
    }, sleepTimeout);
    container.style.display = 'block';
    sleepingScreen.style.display = 'none';
});

document.addEventListener('touchstart', () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
        container.style.display = 'none';
        sleepingScreen.style.display = 'block';
    }, sleepTimeout);
    container.style.display = 'block';
    sleepingScreen.style.display = 'none';
});