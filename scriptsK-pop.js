
// Добавляем функционал для скрытия/показа блока
document.getElementById('toggle-btn').addEventListener('click', function() {
    const aside = document.getElementById('sidebar');
    aside.classList.toggle('hidden');
});




let index = 0;


function moveSlide(direction) {
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;
    index += direction;

    if (index < 0) {
        index = totalSlides - 1; // Если идет движение назад, то идем к последнему слайду
    } else if (index >= totalSlides) {
        index = 0; // Если идет движение вперед, то идем к первому слайду
    }

    const carousel = document.querySelector('.carousel');
    carousel.style.transform = `translateX(-${index * 100}%)`;

    // После мгновенного перехода включаем плавный переход снова
    setTimeout(() => {
        carousel.style.transition = 'transform 0.5s ease-in-out';
    }, 10); // Ожидаем до следующего обновления экрана
}




// Функция для генерации случайного номера билета
function generateTicketNumber() {
    const part1 = Math.floor(Math.random() * 9) + 1; // Первая цифра (от 1 до 9)
    const part2 = Math.floor(100 + Math.random() * 900); // Три цифры (от 100 до 999)
    const part3 = Math.floor(100 + Math.random() * 900); // Три цифры (от 100 до 999)
    return `${part1}-${part2}-${part3}`;
}

document.getElementById("buy-button").addEventListener("click", function () {
    const name = document.getElementById("full-name").value;
    const email = document.getElementById("email").value;
    const date = document.getElementById("concert-date").value;
    const group = document.getElementById("group").value;
    const ticketType = document.getElementById("ticket-type").value;

    if (name && email && date && group && ticketType) {
        const ticketPrice = {
            standard: "3000 ₽",
            vip: "8000 ₽",
            premium: "15000 ₽"
        };

        const ticketNumber = generateTicketNumber(); // Генерируем номер билета

        alert(`Чек:\nФИО: ${name}\nEmail: ${email}\nДата концерта: ${date}\nГруппа: ${group}\nКатегория билета: ${ticketType} (${ticketPrice[ticketType]})\nНомер билета: ${ticketNumber}`);
    } else {
        alert("Заполните все поля!");
    }
});

