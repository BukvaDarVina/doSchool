const galleryImages = document.querySelectorAll('#gallery img');
const fullscreenContainer = document.getElementById('fullscreen-container');
const fullscreenImg = document.getElementById('fullscreen-img');
const closeBtn = document.getElementById('close-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let currentIndex = 0;

// Открытие изображения в полноэкранном режиме
galleryImages.forEach((img, index) => {
    img.addEventListener('click', () => {
        currentIndex = index;
        openFullscreen(currentIndex);
    });
});

// Функция для открытия изображения по индексу
function openFullscreen(index) {
    fullscreenImg.src = galleryImages[index].src;
    fullscreenContainer.style.display = 'flex';
}

// Закрытие полноэкранного режима
closeBtn.addEventListener('click', () => {
    fullscreenContainer.style.display = 'none';
});

// Переход к следующему изображению
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % galleryImages.length; // Зацикливаем переход
    openFullscreen(currentIndex);
});

// Переход к предыдущему изображению
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length; // Зацикливаем назад
    openFullscreen(currentIndex);
});