const input = document.getElementById("link-input");
const form = document.getElementById("link-form");
const error = document.getElementById("error-message");

document.addEventListener('DOMContentLoaded', () => {
    const hamburguer = document.getElementById('menu-btn');
    const menu = document.getElementById('menu');
    hamburguer.addEventListener('click', (e) => {
        hamburguer.classList.toggle('open');
        if (hamburguer.classList.contains('open')) {
            menu.classList.remove('hidden');
            menu.classList.add('flex');
        }
        else {
            menu.classList.add('hidden');
            menu.classList.remove('flex');
        }
        setTimeout(() => {
            menu.classList.toggle('opacity-100');
        }, 0);

    })
})

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (input.value === '') {
        error.innerText = 'Please enter a valid link';
        input.classList.add('border-red');
        return;
    }
    error.innerText = '';
    if (input.classList.contains('border-red')) {
        input.classList.remove('border-red');
    }
});