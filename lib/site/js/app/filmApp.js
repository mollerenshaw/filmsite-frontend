
// Define the `phonecatApp` module
var filmApp = angular.module('filmApplication', ['ngMaterial']);

// Define the `FilmListController` controller on the `filmApp` module
filmApp.controller('FilmListController', function FilmListController($scope) {
  $scope.films = [
    {
      title: 'Toy Story',
      year: 2005,
      description: 'A cowboy doll is profoundly threatened and jealous when a new spaceman figure supplants him as top toy in a boy\'s room.'
    }, {
      title: 'Nocturnal Animals',
      year: 2016,
      description: 'An art gallery owner is haunted by her ex-husband\'s novel, a violent thriller she interprets as a veiled threat and a symbolic revenge tale.'
    }, {
      title: 'Doctor Strange',
      year: 2016,
      description: 'A former neurosurgeon embarks on a journey of healing only to be drawn into the world of the mystic arts.'
    }

  ];
});