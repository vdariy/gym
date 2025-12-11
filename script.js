// --- БУРГЕР МЕНЮ ---
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('nav-active');
    });
});

// --- КАЛЬКУЛЯТОР ИМТ ---
function calculateBMI() {
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const resultDisplay = document.getElementById('bmi-result');
    const messageDisplay = document.getElementById('bmi-message');

    if (weight && height) {
        const hMeter = height / 100;
        const bmi = (weight / (hMeter * hMeter)).toFixed(1);
        resultDisplay.textContent = bmi;
        
        if(bmi < 18.5) {
            messageDisplay.textContent = "Дефицит массы";
            messageDisplay.style.color = "#f1c40f";
        } else if(bmi < 25) {
            messageDisplay.textContent = "Отличная форма!";
            messageDisplay.style.color = "#2ecc71";
        } else if(bmi < 30) {
            messageDisplay.textContent = "Избыточный вес";
            messageDisplay.style.color = "#e67e22";
        } else {
            messageDisplay.textContent = "Ожирение (1+ ст)";
            messageDisplay.style.color = "#e74c3c";
        }
    } else {
        alert("Пожалуйста, введите рост и вес!");
    }
}

// --- АККОРДЕОН FAQ ---
const accItems = document.querySelectorAll('.accordion-item');
accItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    header.addEventListener('click', () => {
        accItems.forEach(i => {
            if(i !== item) i.classList.remove('active');
        });
        item.classList.toggle('active');
    });
});

// --- ОБРАБОТКА ФОРМЫ (ИМИТАЦИЯ) ---
const form = document.getElementById('leadForm');
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Останавливаем перезагрузку страницы
    alert("Спасибо! Ваша заявка в Ashenov Gym принята. Мы свяжемся с вами в течение 15 минут.");
    form.reset(); // Очищаем поля
});