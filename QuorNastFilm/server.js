const express = require('express');
const path = require('path');
const app = express();

// Render сам назначит порт через переменную окружения PORT
const PORT = process.env.PORT || 3000;

// 1. Указываем папку 'public' как место хранения статических файлов (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// 2. Добавляем API-маршрут (просто для проверки, что сервер живой)
app.get('/api/status', (req, res) => {
    res.json({ 
        status: "ok", 
        message: "Сервер успешно запущен на Render!" 
    });
});

// 3. САМОЕ ВАЖНОЕ: Если пользователь заходит на любую страницу, 
// отдаем ему index.html. Это решает проблему "Not Found".
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Запуск сервера на хосте 0.0.0.0 (обязательно для Render)
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Сервер работает на порту ${PORT}`);
});