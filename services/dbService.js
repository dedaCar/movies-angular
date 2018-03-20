angular.module('dbService',[]).
  service('db',function functionName($http) {
    this.getMovie = function () {
      return $http({
        method: "GET",
        url: "bands-master/externalDb.json"
      })
    }
  })
