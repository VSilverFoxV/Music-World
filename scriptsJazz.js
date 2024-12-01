
// Добавляем функционал для скрытия/показа блока
document.getElementById('toggle-btn').addEventListener('click', function() {
    const aside = document.getElementById('sidebar');
    aside.classList.toggle('hidden');
});


// Данные для графика
const data = {
    labels: ['1920', '1930', '1940', '1950', '1960', '1970', '1980', '1990', '2000', '2010'], // Годы
    datasets: [{
        label: 'Популярность Джаза',
        data: [50, 60, 80, 90, 85, 75, 60, 70, 65, 80], // Популярность в процентах
        backgroundColor: 'rgba(127, 60, 148, 0.6)', // Фиолетовый цвет с прозрачностью
        borderColor: 'rgba(127, 60, 148, 1)', // Фиолетовая линия графика
        borderWidth: 2,
        hoverBackgroundColor: 'rgba(127, 60, 148, 0.8)', // Цвет при наведении
        hoverBorderColor: 'rgba(127, 60, 148, 1)'
    }]
};

// Опции для графика
const options = {
    responsive: true,
    plugins: {
        legend: {
            display: true,
            position: 'top',
            labels: {
                color: 'white' // Цвет текста в легенде
            }
        },
        tooltip: {
            enabled: true,
            mode: 'index',
            intersect: false,
            backgroundColor: 'rgba(0,0,0,0.7)', // Цвет фона тултипа
            titleColor: 'white', // Цвет заголовка тултипа
            bodyColor: 'white' // Цвет текста тултипа
        }
    },
    scales: {
        x: {
            beginAtZero: true,
            title: {
                display: true,
                text: 'Годы',
                color: 'white' // Цвет подписей на оси X
            },
            ticks: {
                color: 'white' // Цвет подписей на оси X
            },
            grid: {
                color: 'rgba(255, 255, 255, 0.2)', // Цвет сетки оси X (белый с прозрачностью)
            }
        },
        y: {
            beginAtZero: true,
            title: {
                display: true,
                text: 'Популярность (%)',
                color: 'white' // Цвет подписей на оси Y
            },
            ticks: {
                color: 'white' // Цвет подписей на оси Y
            },
            grid: {
                color: 'rgba(255, 255, 255, 0.2)', // Цвет сетки оси Y (белый с прозрачностью)
            }
        }
    }
};

// Создание графика
window.onload = function() {
    const ctx = document.getElementById('jazzChart').getContext('2d');
    const jazzChart = new Chart(ctx, {
        type: 'line', // Тип графика
        data: data,   // Данные для графика
        options: options // Настройки графика
    });
};
