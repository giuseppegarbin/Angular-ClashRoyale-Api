'use strict'

app.controller('cardController', ['$scope', '$routeParams', 'crapiService', 

    function($scope, $routeParams, crapiService) {

        $scope.pageTitle = 'Cards';
        $scope.pageClass = 'page__cards';

        var cardId = $routeParams.id;
        $scope.card = {};

        if (typeof(cardId) == 'string') {
            crapiService.card(cardId).
                then(function(cardData){
                    $scope.card = cardData;
                });
        }
    }
]);