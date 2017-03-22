var app = angular.module('mainApp',['ngRoute']);

app.config(function($routeProvider,$locationProvider){

  $routeProvider
  .when('/landing-page', {
    controller: 'landingPage',
    templateUrl: 'views/landing-page/view/landingpage.html'
  })
  .when('/main-page', {
    controller: 'mainPage',
    templateUrl: 'views/main-page/view/mainpage.html'
  })
  .when('/about-us', {
    controller: 'aboutUs',
    templateUrl: 'views/about-us/view/aboutus.html'
  });

  $locationProvider.hashPrefix('');
});
