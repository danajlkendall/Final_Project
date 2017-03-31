var app = angular.module('mainApp',['ngRoute']);

app.config(function($routeProvider,$locationProvider){

  $routeProvider
  .when('/landing-page', {
    controller: 'landingPage',
    templateUrl: 'views/landing-page/landingpage.html'
  })
  .when('/main-page', {
    controller: 'mainPage',
    templateUrl: 'views/main-page/mainpage.html'
  })
  .when('/about-us', {
    controller: 'aboutUs',
    templateUrl: 'views/about-us/aboutus.html'
  })
  .otherwise('/landing-page', {
    controller: 'landingPage',
    templateUrl: 'views/landing-page/landingpage.html'
  });

  $locationProvider.hashPrefix('');
});
