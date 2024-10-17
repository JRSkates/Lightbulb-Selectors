// Write your code here
const lightbulbs = document.querySelectorAll('.lightbulb');

let clickCount = 0;

lightbulbs.forEach(lightbulb => {
    lightbulb.addEventListener('click', () => {
        lightbulb.classList.toggle('active');
        
        clickCount += 1;

        const count = document.querySelector('.subtitle');
        count.textContent = `You've clicked the lights ${clickCount} times`;
    });
});