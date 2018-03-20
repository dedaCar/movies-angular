angular.module('mainController',[])

  .controller('mainCtrl',function ($window, $routeParams,$scope,db) {
    $scope.movies = [];
    $scope.activeMovie = {};

    db.getMovie().then(function (res) {
      $scope.movies = res.data;

      if ($routeParams.id) {
        let movieActive = $scope.movies.filter(function (e) {
          return e.id == $scope.para;
        })
        $scope.activeMovie = movieActive[0];
      }
    })

    $scope.para = $routeParams.id;

  })
