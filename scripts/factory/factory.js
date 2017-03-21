var app = angular.module('mainApp');

angular.factory = ('dataFactory',function(){

  var homData = {};

  return {

  }

  $http({
    method: 'GET',
    url: 'https://data.detroitmi.gov/resource/sr29-szd3.json'
  }).then(function successCallBack(response) {
    homData = response;
    console.log(response);
  });


})
