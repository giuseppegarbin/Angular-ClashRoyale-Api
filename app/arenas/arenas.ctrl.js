'use strict'

app.controller('arenasController', ['$scope', '$routeParams', 'crapiService', 

    function($scope, $routeParams, crapiService) {

        $scope.pageTitle = 'Arenas';
        $scope.pageClass = 'page__arenas';

        var arenaId = $routeParams.id;
        $scope.arenas = {};

        if (typeof(arenaId) == 'string') {
            crapiService.arena(arenaId).
                then(function(arenasData){
                    $scope.arenas = {arenasData};
                });
        } else {
            crapiService.arena().
                then(function(arenasData){
                    $scope.arenas = arenasData;
                });
        }
    }
]);