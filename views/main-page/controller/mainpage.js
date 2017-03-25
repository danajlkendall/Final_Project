var app = angular.module('mainApp');

app.controller('mainPage',function($scope, $http){

  $scope.homData = {};
  $scope.allHomicides = [];

  $http({
      method: 'GET',
      url: 'https://data.detroitmi.gov/resource/jut2-warj.json',
      headers: {'X-App-Token': 'c9TllBUfGZDL2uOu9rgu1j0vw'}
    }).then(function successCallBack(response) {
      $scope.homData = response.data;

      for (var i=0; i<$scope.homData.length; i++){
        var homicide = {
          precinct: $scope.homData[i].precinct,
          date: $scope.homData[i].incidentdate,
          lat: $scope.homData[i].latitude,
          long: $scope.homData[i].longtitude
        }
        $scope.allHomicides.push(homicide);
      };
    });

    console.log($scope.allHomicides);

});
