//Create a program to manage a movie database.
//Define interfaces for movies with properties like title, director, genre, rating, etc.
//Implement functions to add new movies, search for movies by title, director, or genre, and display movie details.
interface Movies{
    name: string;
    director: string;
    genre: string;
    rating: number
}

interface MoviesDatabase{
    movie:Movies[]
}

function addMovie(Collection:MoviesDatabase , newMovie:Movies){
    Collection.movie.push(newMovie);
}

function removeMovie(Collection:MoviesDatabase , movieName: string){
    Collection.movie = Collection.movie.filter(m => m.name !== movieName);
}

function updateMovie(Collection:MoviesDatabase , movieName: string , newMovie: Movies){
    var old = Collection.movie.findIndex(m => m.name === movieName)
    if (old > -1){
         Collection.movie[old]= newMovie
    }
}

var MyCollection:MoviesDatabase = {
    movie:[
        {name:'MNO' , director:'PQRS' , genre:'action' , rating: 0.1}
    ]
}

addMovie(MyCollection , {name:'XYZ' , director:'ABC' , genre:'action' , rating: 0})

removeMovie(MyCollection , 'MNO')

updateMovie(MyCollection , 'XYZ' , {name:'TUV' , director:'IJK' , genre:'unknown' , rating:0.01})

console.log(MyCollection)
