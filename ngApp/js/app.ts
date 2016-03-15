'use strict';
namespace App {
  angular.module('app', ['ngResource','ui.router'])
    .config(function(
      $stateProvider: ng.ui.IStateProvider,
      $locationProvider: ng.ILocationProvider,
      $urlRouterProvider: ng.ui.IUrlRouterProvider
    ){
      $stateProvider.state('Home',{
        url:'/',
        templateUrl: '/templates/home.html',
        controller: 'HomeController',
        controllerAs: 'vm'
      }).state('Create Movie',{
        url:'/movie/create',
        templateUrl:'/templates/movieCreate.html',
        controller: 'MovieCreateController',
        controllerAs: 'vm'
      }).state('Movie Details', {
        url:'/movie/:id',
        templateUrl:'/templates/movieDetails.html',
        controller:'MovieDetailsController',
        controllerAs:'vm'
      });

      $urlRouterProvider.otherwise('/');
      $locationProvider.html5Mode(true);
    });
}
