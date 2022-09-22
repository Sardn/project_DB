'use strict';

const adv = document.querySelectorAll('.promo__adv img'),
    poster = document.querySelector('.promo__bg'),
    genre = poster.querySelector('.promo__genre'),
    movieList = document.querySelector('.promo__interactive-list');


adv.forEach(item => {
    item.remove();
});

genre.textContent = 'драма';
poster.style.backgroundImage = "url('../img/bg.jpg')";
movieList.textContent = '';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

movieDB.movies.sort();
movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
    <li class="promo__interactive-item">${film} ${i + 1}
    <div class="delete"></div>
</li>
    `
})