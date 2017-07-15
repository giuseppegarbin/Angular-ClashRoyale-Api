'use strict'

app.controller('homeController', ['$scope', 'crapiService', 

    function($scope, crapiService) {

        $scope.pageTitle = 'Homepage';
        $scope.pageClass = 'page__home';

        $scope.arenas = {};
        crapiService.arena().
            then(function(arenasData){
                $scope.arenas = arenasData;
            });

        $scope.cards = {};
        crapiService.card().
            then(function(cardsData){
                $scope.cards = cardsData;
            });

    }
]);