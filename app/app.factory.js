'use strict'

app.factory('crapiService', ['$http', 'crapiEndpoints',

  function CrapiService($http, crapiEndpoints) {

    var self = this;
    var api = 'http://www.clashapi.xyz/api/';

    function request(url) {
      return $http.get(url).then(
        function resultHandler(data) {
          if (data.status !== 200) {
            // something goes wrong
            throw new Error('Webserver responded with HTTP STATUS: ' + data.status);
          }
          return data.data;
        }
      );
    }

    function composeUrl(destination, id) {
      var sep = '/';
      var url = api + destination + sep;

      if (angular.isDefined(id)) {
        url += id + sep;
      }
      return url;
    }

    function getSpecificResource(destination, id) {
      var url = composeUrl(destination, id);
      return request(url);
    }

    function arena(id) {
      return getSpecificResource(crapiEndpoints.ARENAS, id);
    }

    function card(id) {
      return getSpecificResource(crapiEndpoints.CARDS, id);
    }

    function chest(id) {
      return getSpecificResource(crapiEndpoints.CHESTS, id);
    }

    function player(id) {
      return getSpecificResource(crapiEndpoints.PLAYERS, id);
    }

    function random() {
      return getSpecificResource(crapiEndpoints.RANDOMDECK);
    }

    return {

      arena: arena,
      card: card,
      chest: chest,
      player: player,
      random: random

    };

  }]);