// Creare slide dinamicamente
const imagesArr = [
    'img/01.webp',
    'img/02.webp',
    'img/03.webp',
    'img/04.webp',
    'img/05.webp'
];

const itemsContainer = document.querySelector ("slider-items")

for (let i = 0; i < imagesArray.length; i++) {
    const currentImage = imagesArray [i];

    const sliderItem = `
        <div class = "item">
            <img src="${currentImage}" alt="">
        </div>`;

        itemsContainer.innerHTML += sliderItem;
}
