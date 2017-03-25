var app = angular.module('mainApp');

app.controller('landingPage',function($scope, $location){

  $scope.precincts = [
    {name : "2nd Precinct", number : "2"},
    {name : "3rd Precinct", number : "3"},
    {name : "4th Precinct", number : "4"}
  ];

  $scope.getPrecinctData = function(selectedPrecinct){
    console.log(selectedPrecinct);
  };

});
