'use strict'

var app = angular.module('GeppeApp', ['ngRoute', 'ngAnimate']);

app.config(function($routeProvider) {
  $routeProvider

    .when('/', {
      templateUrl: 'app/home/home.html',
      controller: 'homeController'
    })

    .when('/arenas/:id?', {
      templateUrl: 'app/arenas/arenas.html',
      controller: 'arenasController'
    })

    .when('/cards', {
      templateUrl: 'app/cards/cards.html',
      controller: 'cardsController'
    })

    .when('/cards/:id', {
      templateUrl: 'app/cards/card.html',
      controller: 'cardController'
    })

    .when('/chests/:id?', {
      templateUrl: 'app/chests/chests.html',
      controller: 'chestsController'
    })

    .when('/players/:id?', {
      templateUrl: 'app/players/players.html',
      controller: 'playersController'
    })

    .when('/random', {
      templateUrl: 'app/random-deck/random-deck.html',
      controller: 'randomController'
    })
});



