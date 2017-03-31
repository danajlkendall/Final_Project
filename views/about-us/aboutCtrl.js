var app = angular.module('mainApp');

app.controller('aboutUs',function($scope, $http){

  $scope.aboutInfo = [
    {
      img: 'image.jpg',
      name: 'Rich',
      fact: 'fun fact',
      why: 'reason for learning to code'
    },
    {
      img: 'image.jpg',
      name: 'John',
      fact: 'fun fact',
      why: 'reason for learning to code'
    },
    {
      img: 'image.jpg',
      name: 'Karl',
      fact: 'fun fact',
      why: 'reason for learning to code'
    },
    {
      img: 'image.jpg',
      name: 'Dana',
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
