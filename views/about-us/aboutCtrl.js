var app = angular.module('mainApp');

app.controller('aboutUs',function($scope, $http){

  $.backstretch("https://cdn.shutterstock.com/shutterstock/videos/5610953/thumb/6.jpg");

  $scope.aboutInfo = [
    {
      img: 'http://i.imgur.com/SQugUWR.jpg',
      name: 'RICH',
      fact: 'fun fact',
      why: 'reason for learning to code'
    },
    {
      img: 'http://i.imgur.com/NxJsfNd.png',
      name: 'JOHN',
      fact: 'Throughout the department John is known by the code name “Whispers”.',
      why: 'John is learning coding as part of an exploratory process for the Detroit Police Department, to evaluate how coding can be applied within law enforcement.'
    },
    {
      img: 'http://i.imgur.com/ojCWASa.png',
      name: 'KARL',
      fact: 'As a hobby Karl trains working dogs.',
      why: 'Karl wants to build things that will shape the future.'
    },
    {
      img: 'http://i.imgur.com/RosO8JR.png',
      name: 'DANA',
      fact: 'When she was 6 years old Dana rode her bike into a pool.',
      why: 'hkjljkljjjjlj'
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
