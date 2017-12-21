var movie = require("./movie");
var threeFavoriteMovies = ['se7en', 'Ted', 'Gladiator'];
threeFavoriteMovies.forEach(function(film){
  movie.get(film);
});