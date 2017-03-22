var app = angular.module('mainApp');

app.controller('mainPage',function($scope, dataFactory){
  $scope.homData = dataFactory.sendData();
  console.log($scope.homData);
});
