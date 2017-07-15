'use strict'

app.controller('cardsController', ['$scope', 'crapiService', 

    function($scope, crapiService) {

        $scope.pageTitle = 'Cards';
        $scope.pageClass = 'page__cards';
        $scope.cards = {};

        crapiService.card().
            then(function(cardsData){
                $scope.cards = cardsData;
                console.log($scope.cards);
            });
    }
]);