var app = angular.module('mainApp');

app.controller('aboutUs',function($scope, $http){

  //$.backstretch("styles/images/car.jpg");

  $scope.aboutInfo = [
    {
      img: 'http://i.imgur.com/SQugUWR.jpg',
      name: 'RICH',
      fact: 'Rich can downhill, board, telemark, cliff and tree',
      why: 'Rich is hoping to move into a programming role full-time'
    },
    {
      img: 'http://i.imgur.com/NxJsfNd.png',
      name: 'JOHN',
      fact: 'Throughout the department John is known by the code name “Whispers”',
      why: 'John is learning coding as part of an exploratory process for the Detroit Police Department, to evaluate how coding can be applied within law enforcement'
    },
    {
      img: 'http://i.imgur.com/ojCWASa.png',
      name: 'KARL',
      fact: 'As a hobby, Karl trains working dogs',
      why: 'Karl wants to build things that will shape the future'
    },
    {
      img: 'http://i.imgur.com/RosO8JR.png',
      name: 'DANA',
      fact: 'When she was 6 years old, Dana accidentally rode her bike into a swimming pool',
      why: "Dana's full-time job is to explain technology to customers, so it's about time she learns how the tool she trains people on is built"
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
