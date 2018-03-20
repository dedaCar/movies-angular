angular.module('movies',[
    'ngRoute',
    'mainController',
    'dbService'
])

.config(function ($locationProvider,$routeProvider) {
  $locationProvider.hashPrefix("");
  $routeProvider
  .when('/',{
    templateUrl : "pages/main.html",
    controller : "mainCtrl"
  })
  .when('/prva/:id',{
    templateUrl : "pages/prva.html",
    controller : "mainCtrl"
  })
})
