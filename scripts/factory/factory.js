var app = angular.module('mainApp');

app.factory = ('dataFactory',function($http){

  var homData = {};

  return {
    getData: getData,
    sendData: sendData
  };

  function getData(){
    $http({
      method: 'GET',
      url: 'https://data.detroitmi.gov/resource/sr29-szd3.json'
    }).then(function successCallBack(response) {
      homData = response;
      console.log(response);
    })

    return promise;
  };

  function sendData(){
    return homData;
  };

});
