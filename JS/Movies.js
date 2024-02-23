"use strict";
function addMovie(Collection, newMovie) {
    Collection.movie.push(newMovie);
}
function removeMovie(Collection, movieName) {
    Collection.movie = Collection.movie.filter(m => m.name !== movieName);
}
function updateMovie(Collection, movieName, newMovie) {
    var old = Collection.movie.findIndex(m => m.name === movieName);
    if (old > -1) {
        Collection.movie[old] = newMovie;
    }
}
var MyCollection = {
    movie: [
        { name: 'MNO', director: 'PQRS', genre: 'action', rating: 0.1 }
    ]
};
addMovie(MyCollection, { name: 'XYZ', director: 'ABC', genre: 'action', rating: 0 });
removeMovie(MyCollection, 'MNO');
updateMovie(MyCollection, 'XYZ', { name: 'TUV', director: 'IJK', genre: 'unknown', rating: 0.01 });
console.log(MyCollection);
