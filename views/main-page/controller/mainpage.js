var app = angular.module('mainApp');

app.controller('mainPage',function($scope, $http){

  var homData = {};

  $http({
      method: 'GET',
      url: 'https://data.detroitmi.gov/resource/jut2-warj.json',
      headers: {'X-App-Token': 'c9TllBUfGZDL2uOu9rgu1j0vw'}
    }).then(function successCallBack(response) {
      $scope.homData = response;
      console.log(response);
      console.log(homData);
    });

});
