var app = angular.module('mainApp');

app.controller('aboutUs',function($scope, $http){

  $.backstretch("https://cdn.shutterstock.com/shutterstock/videos/5610953/thumb/6.jpg");

  $scope.aboutInfo = [
    {
      img: 'http://sunfieldfarm.org/wp-content/uploads/2014/02/profile-placeholder.png',
      name: 'RICH',
      fact: 'fun fact',
      why: 'reason for learning to code'
    },
    {
      img: 'http://sunfieldfarm.org/wp-content/uploads/2014/02/profile-placeholder.png',
      name: 'JOHN',
      fact: 'fun fact',
      why: 'reason for learning to code'
    },
    {
      img: 'http://sunfieldfarm.org/wp-content/uploads/2014/02/profile-placeholder.png',
      name: 'KARL',
      fact: 'fun fact',
      why: 'reason for learning to code'
    },
    {
      img: 'http://sunfieldfarm.org/wp-content/uploads/2014/02/profile-placeholder.png',
      name: 'DANA',
      fact: 'fun fact',
      why: 'reason for learning to code'
    }
  ];
});

app.directive('aboutSection',function(){
  return {
    restrict: 'E',
    templateUrl: 'views/about-us/aboutDir.html',
    replace: false
  };
});
