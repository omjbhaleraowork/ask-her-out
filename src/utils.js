export const moveButton = () => {
    const noButton = document.getElementById('noButton');
    const x = Math.random() * (window.innerWidth - noButton.offsetWidth) - 85;
    const y = Math.random() * (window.innerHeight - noButton.offsetHeight) - 48;
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
};
