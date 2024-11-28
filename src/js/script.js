'use strict';
let numberOfFilms = +prompt('Сколько фильмов ви уже посмотрели?', '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {

    },
    actors: {},
    genres: [],
    privat: false
};




// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//         b = prompt('На сколько оцените его?', '');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
// }

let i = 0;
while (i < 2) {
    let a = prompt('Один из последних просмотрених фильмов?', '');
    let b = prompt('На сколько оцените его?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
    i++;
}





if (numberOfFilms < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (numberOfFilms >= 10 && numberOfFilms < 30) {
    console.log("Вы классический зритель");
} else if (numberOfFilms >= 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}



console.log(personalMovieDB);